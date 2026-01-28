import React, { useState } from "react";
import { User, Settings, LogOut, ShieldOff } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import MenuItem from "./MenuItem";
import UpdateProfile from "@/components/Form/UpdateProfile";
import updateProfileHandler from "@/api/service/updateUserProfile";
import { getFirstName, getLastName } from "@/utils/tools/getUserName";

function Profile({ isAuth, userName }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Une erreur est survenue lors de la requête.");
  const [updateProfile, setUpdateProfile] = useState({
    firstName: getFirstName() || "",
    lastName: getLastName() || "",
    city: localStorage.getItem("userCity") || "",
    location: localStorage.getItem("location") || "",
    phone: localStorage.getItem("phone") || "",
  });
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <UpdateProfile
            onSubmit={(e) =>
              updateProfileHandler({
                e,
                updateProfile,
                setIsLoading,
                setError,
                setSuccess,
                setErrorMessage
              })
            }
            updateProfile={updateProfile}
            setUpdateProfile={setUpdateProfile}
          />
        );
      case "settings":
        return <div>⚙️ Paramètres</div>;
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
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
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
          {error && (
            <div className="bg-red-100 border-red-900 text-red-700 p-3 rounded mb-4">
              <b>Erreur : </b>{errorMessage}
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
