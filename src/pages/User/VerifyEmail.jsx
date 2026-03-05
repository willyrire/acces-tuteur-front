import React, { useEffect, useState } from "react";
import getParams from "@/utils/tools/getParams";
import { isEmpty } from "@/utils/tools/isEmpty";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import verifyEmail from "@/api/service/verifyEmail";
import getUserData from "@/api/service/getUserData";
import updateLocalData from "@/utils/tools/updateLocalData";
import Section from "@/components/Section";
import SuccessCheck from "@/components/animation/SuccessCheck";
import ErrorCheck from "@/components/animation/ErrorCheck";

function VerifyEmail({ isAuth, userName }) {
  const [requestStatus, setRequestStatus] = useState("processing");
  const params = getParams();

  useEffect(() => {
    if (isEmpty(params.code)) {
      setRequestStatus("error");
      return;
    }

    const runVerification = async () => {
      try {
        const verifData = await verifyEmail(params.code);
        if (!verifData.success) {
          setRequestStatus("error");
          return;
        }
        setRequestStatus("success");
      } catch {
        setRequestStatus("error");
      }
      // On update quand même les données pour qu'elles soient à jour
      const data = await getUserData();
      updateLocalData(data.data);
    };

    runVerification();
  }, []);
  return (
    <div className="flex flex-col">
      <Header removeWarnings={true} isAuth={isAuth} userName={userName} />

      {requestStatus === "processing" && (
        <Section
          title="Vérification en cours"
          className="bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-center"
        >
          Veuillez patienter pendant que nous vérifions votre adresse e-mail.
        </Section>
      )}

      {requestStatus === "error" && (
        <>
          <Section
            title=""
            className="bg-white-500 my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
          >
            <SuccessCheck text="" />

            <h1 className="text-3xl font-bold mb-4">Adresse Courriel Vérifié</h1>
            <p className="mt-2 text-[18px] mb-4">
              Votre adresse courriel a été vérifiée avec succès.
            </p>
            <p className="mt-6">
              <a
                href="/"
                className="rounded-full active:opacity-75 hover:text-blue-500 transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
              >
                Retour à l'accueil
              </a>
            </p>
          </Section>
        </>
      )}

      {requestStatus === "error" && (
        <>
          <Section
            title=""
            className="bg-white-500 my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
          >
            <ErrorCheck text="" />

            <h1 className="text-3xl font-bold mb-4">Une erreur s'est produite</h1>
            <p className="mt-2 text-[18px] mb-4">
              Une erreur s'est produite lors de la vérification de votre adresse courriel.
            </p>
            <p className="mt-6">
              <a
                href="/"
                className="rounded-full active:opacity-75 hover:text-blue-500 transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
              >
                Retour à l'accueil
              </a>
            </p>
          </Section>
        </>
      )}

      <Footer />
    </div>
  );
}

export default VerifyEmail;
