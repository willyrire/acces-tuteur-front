import React, { useEffect, useState } from "react";
import getParams from "@/utils/tools/getParams";
import { isEmpty } from "@/utils/tools/isEmpty";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import verifyEmail from "@/api/service/verifyEmail";
import getUserData from "@/api/service/getUserData";
import updateLocalData from "@/utils/tools/updateLocalData";
import { div } from "framer-motion/client";
import Section from "@/components/Section";

function Profile({ isAuth, userName }) {
  const [requestStatus, setRequestStatus] = useState("processing"); // processing | success | error
  const params = getParams();
  useEffect(() => {
    if (isEmpty(params.code)) {
      setRequestStatus("error");
      return;
    }

    // TODO : Bien getData, une erreur se produit à quelque part.
    const verify = async () => {
      console.log("Starting verification with code:", params.code);
      if (requestStatus === "processing") {
        try {
          const verifData = await verifyEmail(params.code);
          console.log("Verification response data:", verifData);
          if (!verifData.success) {
            setRequestStatus("error");
            return;
          }
          setRequestStatus("processing-success-change");
        } catch (err) {
          console.log("Error during email verification:", err);
          setRequestStatus("error");
        }
      }
      console.log("Request status after verification attempt:", requestStatus);

      // Si en process ou 
      if(requestStatus === "processing") {
        try{
          const userData = await getUserData();
          console.log("User data fetched after verification:", userData);
          if (userData.status === "success") {
            console.log("Updating local data with:", userData.data);
            updateLocalData(userData.data);
            setRequestStatus("processing-success-success");
          }
        } catch(err) {
          setRequestStatus("error");
          console.log("Error updating local data after email verification:", err);
        }
      }
      if(requestStatus === "processing-success-success") {
        setRequestStatus("success");
      }
    };

    verify();
  }, []); // 🔥 une seule fois au mount

  return (
    <div className="flex flex-col">
      <Header removeWarnings={true} isAuth={isAuth} userName={userName} />

      {/* Contenu */}
      {(requestStatus === "processing" || requestStatus === "processing-success-change") && (
        <div>
          <Section
            title={"Vérification en cours"}
            children={
              "Veuillez patienter pendant que nous vérifions votre adresse e-mail."
            }
            className={"bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-center"}
          />
        </div>
      )}
      {requestStatus === "success" && (
        <div>
          <Section
            title={"Vérification réussie"}
            children={
              <>
                <p className="mt-2 text-[18px]">
                  Votre adresse e-mail a été vérifiée avec succès. Vous pouvez
                  maintenant accéder à toutes les fonctionnalités.
                </p>
                <p className="mt-6">
                  <a
                    href="/"
                    className="items-center rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold align-center"
                  >
                    Retour à l'accueil
                  </a>
                </p>
              </>
            }
            className={
              "bg-white-500 my-[7%] pb-30 pt-50 max-w-4xl mx-auto text-center"
            }
          />
        </div>
      )}
      {requestStatus === "error" && (
        <div>
          <Section
            title={"Une erreur s'est produite"}
            children={
              <>
                <p className="mt-2 text-[18px]">
                  Une erreur est survenue lors de la vérification de votre
                  adresse e-mail. Veuillez réessayer plus tard.
                </p>
                <p className="mt-6">
                  <a
                    href="/"
                    className="items-center rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold align-center"
                  >
                    Retour à l'accueil
                  </a>
                </p>
              </>
            }
            className={
              "bg-white-500 my-[7%] pb-30 pt-50 max-w-4xl mx-auto text-center"
            }
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Profile;
