import React, { useState } from "react";
import openApp from "@/handler/actions/openApp";
import {
  User,
  Settings,
  LogOut,
  X,
  ShieldCheck,
  AppWindow,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import MenuItem from "./MenuItem";
import UpdateProfile from "@/components/Form/UpdateProfile";
import ChangePassword from "@/components/Form/ChangePassword";
import updateProfileHandler from "@/api/service/updateUserProfile";
import { getFirstName, getLastName } from "@/utils/tools/getUserName";
import changePasswordFinalize from "@/api/service/changePasswordFinalize";
import { div } from "framer-motion/client";
import ChangeEmail from "@/components/Form/ChangeEmail";
import changeEmailFinalize from "@/api/service/changeEmailFinalize";
import logout from "@/handler/actions/logout";
import logoutFromAll from "@/api/auth/logoutFromAll";

function Profile({ isAuth, userName }) {
  const [activeTab, setActiveTab] = useState("applications");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Votre profil a été mis à jour avec succès.",
  );
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur est survenue lors de la requête.",
  );
  const [updateProfile, setUpdateProfile] = useState({
    firstName: getFirstName() || "",
    lastName: getLastName() || "",
    city: localStorage.getItem("userCity") || "",
    location: localStorage.getItem("location") || "",
    phoneNumber: localStorage.getItem("phone") || "",
  });
  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [changeEmail, setChangeEmail] = useState({
    newEmail: "",
    currentPassword: "", // Pour valider le changement
  });

  const changePasswordInit = (e) => {
    e.preventDefault();
    setSuccess(false);
    if (changePassword.newPassword !== changePassword.confirmNewPassword) {
      setError(true);
      setErrorMessage("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    if (changePassword.newPassword === changePassword.currentPassword) {
      setError(true);
      setErrorMessage(
        "Le nouveau mot de passe doit être différent de l'ancien.",
      );
      return;
    }
    changePasswordFinalize({
      e,
      changePassword,
      setIsLoading,
      setError,
      setSuccess,
      setErrorMessage,
    });

    setSuccessMessage("Mot de passe modifié avec succès.");
  };
  const renderContent = () => {
    switch (activeTab) {
      case "applications":
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Mes Applications
            </h3>
            <p>
              Voici la liste de vos applications. <br /> Cliquer sur
              l'application de votre choix pour pouvoir y accéder.
            </p>
            <br />
            <button
              aria-label="Accéder au tableau de bord de l'application"
              onClick={() => openApp("profile_page")}
              className={`w-full text-center p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:cursor-pointer transition my-4`}
            >
              <ExternalLink size={20} className="inline mr-2" /> Accéder au
              tableau de bord
            </button>
            <p className="text-gray-400">
              En cliquant sur les boutons ci-dessus, vous acceptez de respecter
              les conditions d'utilisation liées à chaque application. Celles-ci
              peuvent différer de celles de notre plateforme principale. Les
              conditions de chaque application est disponible dans la section
              légal de notre plateforme principale.
              <br />
            </p>
          </>
        );  
      case "profil":
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Modifier mon Profil
            </h3>
            <p>
              Bienvenue sur votre profil. Vous pouvez mettre à jour vos
              informations personnelles ci-dessous. Si vous désirez changer
              votre mot de passe ou votre adresse courriel, veuillez cliquer sur{" "}
              <b>Paramètres</b> en utilisant le menu de navigation ci-contre.
            </p>
            <br />
            <UpdateProfile
              onSubmit={(e) =>
                updateProfileHandler({
                  e,
                  updateProfile,
                  setIsLoading,
                  setError,
                  setSuccess,
                  setErrorMessage,
                })
              }
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
          </>
        );
      case "settings":
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Paramètres
            </h3>
            <p>
              Ici vous pouvez changer votre mot de passe ainsi que votre adresse
              courriel.
            </p>
            <ChangePassword
              changePassword={changePassword}
              setChangePassword={setChangePassword}
              onSubmit={changePasswordInit}
            />
            <ChangeEmail
              changeEmail={changeEmail}
              setChangeEmail={setChangeEmail}
              onSubmit={(e) =>
                changeEmailFinalize({
                  e,
                  changeEmail,
                  setIsLoading,
                  setError,
                  setSuccess,
                  setErrorMessage,
                })
              }
            />
          </>
        );
      case "security":
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Sécurité du compte
            </h3>
            <p>
              Pour des raisons de sécurité, nous vous recommandons de ne pas
              partager vos informations de connexion avec quiconque et de
              choisir un mot de passe robuste. Assurez-vous également de mettre
              à jour régulièrement votre mot de passe pour protéger votre compte
              contre les accès non autorisés.
            </p>
            <br />
            <button
              onClick={() => {
                logout();
              }}
              className="w-full text-left flex hover:cursor-pointer border-2 border-red-600 rounded  items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} /> Se déconnecter
            </button>
            <br />
            <button
              onClick={() => {
                logoutFromAll();
              }}
              className="w-full text-left flex hover:cursor-pointer border-2 border-red-600 rounded  items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} /> Se déconnecter de toutes les sessions
            </button>
            <br />
            {/* Supprimer le compte, fonctionnalité à venir. */}
            {/* <button
              onClick={() => {
                logout();
              }}
              className="w-full text-left flex hover:cursor-pointer border-2 border-red-600 rounded  items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-50"
            >
              <X size={18} /> Supprimer mon compte
            </button> */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gray-200 flex-col min-h-screen">
      <Header isAuth={isAuth} userName={userName} />

      {/* CONTENU */}
      <div className="flex flex-1 max-w-6xl my-20 mt-30 w-full mx-auto gap-6 px-4">
        {/* MENU GAUCHE */}
        <aside className="w-64 bg-gray-100 rounded-xl p-4">
          <ul className="space-y-2">
            <MenuItem
              label="Applications"
              icon={AppWindow}
              active={activeTab === "applications"}
              onClick={() => {
                setActiveTab("applications");
                setSuccess(false);
                setError(null);
              }}
            />

            <MenuItem
              label="Profil"
              icon={User}
              active={activeTab === "profil"}
              onClick={() => {
                setActiveTab("profil");
                setSuccess(false);
                setError(null);
              }}
            />

            <MenuItem
              label="Paramètres"
              icon={Settings}
              active={activeTab === "settings"}
              onClick={() => {
                setActiveTab("settings");
                setSuccess(false);
                setError(null);
              }}
            />

            <MenuItem
              label="Sécurité du compte"
              icon={ShieldCheck}
              active={activeTab === "security"}
              onClick={() => {
                setActiveTab("security");
                setSuccess(false);
                setError(null);
              }}
            />
          </ul>
        </aside>

        {/* CONTENU DROIT */}
        <main className="flex-1 bg-white rounded-xl p-6 shadow">
          {/* Si des erreurs on les mets tout de suite */}
          {isLoading && (
            <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4">
              Traitement de la requête...
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
              {successMessage}
            </div>
          )}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              <b>Erreur : </b>
              {errorMessage}
            </div>
          )}
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
