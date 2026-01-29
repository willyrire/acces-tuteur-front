import React, { useState } from "react";
import { User, Settings, LogOut, ShieldOff } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import MenuItem from "./MenuItem";
import UpdateProfile from "@/components/Form/UpdateProfile";
import ChangePassword from "@/components/Form/ChangePassword";
import updateProfileHandler from "@/api/service/updateUserProfile";
import { getFirstName, getLastName } from "@/utils/tools/getUserName";
import changePasswordFinalize from "@/api/service/changePasswordFinalize";
import { div } from "framer-motion/client";

function Profile({ isAuth, userName }) {
  const [activeTab, setActiveTab] = useState("profil");
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

  const changePasswordInit = (e) => {
    e.preventDefault();

    if (
      changePassword.newPassword !== changePassword.confirmNewPassword
    ) {
      setError(true);
      setErrorMessage("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    if(changePassword.newPassword === changePassword.currentPassword) {
      setError(true);
      setErrorMessage("Le nouveau mot de passe doit être différent de l'ancien.");
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
  }
  const renderContent = () => {
    switch (activeTab) {
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
              Ici vous pouvez changer votre mot de passe ainsi que votre adresse courriel.
            </p>
            <ChangePassword 
              changePassword={changePassword}
              setChangePassword={setChangePassword}
              onSubmit={changePasswordInit}
            />
          </>
        );
      case "logout":
        return <div>🚪 Déconnexion</div>;
      case "logoutAll":
        return <div>🔥 Déconnexion de toutes les sessions</div>;
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
              label="Profil"
              icon={User}
              active={activeTab === "profil"}
              onClick={() => setActiveTab("profil")}
            />

            <MenuItem
              label="Paramètres"
              icon={Settings}
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />

            <MenuItem
              label="Déconnexion"
              icon={LogOut}
              active={activeTab === "logout"}
              onClick={() => setActiveTab("logout")}
            />

            <MenuItem
              label="Déconnexion globale"
              icon={ShieldOff}
              danger
              active={activeTab === "logoutAll"}
              onClick={() => setActiveTab("logoutAll")}
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
