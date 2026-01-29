import React, { useEffect, useState } from "react";
import getParams from "@/utils/tools/getParams";
import { isEmpty } from "@/utils/tools/isEmpty";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import verifyEmail from "@/api/service/verifyEmail";
import getUserData from "@/api/service/getUserData";
import updateLocalData from "@/utils/tools/updateLocalData";
import Section from "@/components/Section";

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

        const userData = await getUserData();
        if (userData?.status === "success") {
          updateLocalData(userData.data);
        }

        setRequestStatus("success");
      } catch {
        setRequestStatus("error");
      }
    };

    runVerification();
    
  }, []);
  return (
    <div className="flex flex-col">
      <Header removeWarnings={true} isAuth={isAuth} userName={userName} />

      {(requestStatus === "processing") && (
        <Section
          title="Vérification en cours"
          className="bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-center"
        >
          Veuillez patienter pendant que nous vérifions votre adresse e-mail.
        </Section>
      )}

      {requestStatus === "success" && (
        <Section
          title="Vérification réussie"
          className="bg-white-500 my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
        >
          <p className="mt-2 text-[18px]">
            Votre adresse courriel a été vérifiée avec succès.
          </p>
          <p className="mt-6">
            <a
              href="/"
              className="rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
            >
              Retour à l'accueil
            </a>
          </p>
        </Section>
      )}

      {requestStatus === "error" && (
        <Section
          title="Vérification réussie"
          className="bg-white-500 my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
        >
          <p className="mt-2 text-[18px]">
            Votre adresse courriel a été vérifiée avec succès.
          </p>
          <p className="mt-6">
            <a
              href="/"
              className="rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
            >
              Retour à l'accueil
            </a>
          </p>
        </Section>
      )}

      <Footer />
    </div>
  );
}

export default VerifyEmail;