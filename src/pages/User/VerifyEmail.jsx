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
  const [trial, setTrial] = useState(0);
  const params = getParams();

  useEffect(() => {
    // reset quand le code change
    setTrial(0);
    setRequestStatus("processing");
  }, [params.code]);

  useEffect(() => {
    if (isEmpty(params.code)) {
      setRequestStatus("error");
      return;
    }

    if (requestStatus === "success") return;

    if (trial >= 3) {
      setRequestStatus("error");
      return;
    }

    let cancelled = false;

    const run = async () => {
      try {
        setRequestStatus("processing");

        const verifData = await verifyEmail(params.code);

        if (cancelled) return;

        if (verifData?.status === "success") {
          setRequestStatus("success");
        } else {
          // retente après un petit délai
          setTimeout(() => {
            if (!cancelled) setTrial((t) => t + 1);
          }, 800);
        }

        // update quand même
        const data = await getUserData();
        if (!cancelled) updateLocalData(data.data);
      } catch (e) {
        if (cancelled) return;
        setTimeout(() => {
          if (!cancelled) setTrial((t) => t + 1);
        }, 800);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [trial, params.code, requestStatus]);
  return (
    <div className="flex flex-col">
      <Header removeWarnings={true} isAuth={isAuth} userName={userName} />

      {requestStatus === "processing" && (
        <Section
          title=""
          className="bg-white-500 max-h-screen my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Spinner */}
            <div
              className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
              aria-label="Chargement"
              role="status"
            />
            <h1 className="text-3xl font-bold">Vérification en cours</h1>
            <p>
              Veuillez patienter pendant que nous vérifions votre adresse
              e-mail.
            </p>
          </div>
        </Section>
      )}

      {requestStatus === "success" && (
        <>
          <Section
            title=""
            className="bg-white-500 max-h-screen my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
          >
            <SuccessCheck text="" />

            <h1 className="text-3xl font-bold mb-4">
              Adresse Courriel Vérifié
            </h1>
            <p className="mt-2 text-[18px] mb-4">
              Votre adresse courriel a été vérifiée avec succès.
            </p>
            <p className="mt-6">
              <a
                href="/"
                className="rounded-full active:opacity-75 hover:text-blue-500 transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
              >
                Retour au profil
              </a>
            </p>
          </Section>
        </>
      )}

      {requestStatus === "error" && (
        <>
          <Section
            title=""
            className="bg-white-500 max-h-screen my-[11%] pb-30 pt-50 max-w-4xl mx-auto text-center"
          >
            <ErrorCheck text="" />

            <h1 className="text-3xl font-bold mb-4">
              Une erreur s'est produite
            </h1>
            <p className="mt-2 text-[18px] mb-4">
              Une erreur s'est produite lors de la vérification de votre adresse
              courriel.
            </p>
            <p className="mt-6">
              <a
                href="/user/profile"
                className="rounded-full active:opacity-75 hover:text-blue-500 transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold"
              >
                Retour au profil
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
