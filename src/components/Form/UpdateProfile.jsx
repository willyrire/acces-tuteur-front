import React from "react";
import {Settings} from "lucide-react"
const UpdateProfile = ({ updateProfile, setUpdateProfile, onSubmit }) => {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Modifier mon profile
        </h3>
        <p>
            Bienvenue sur votre profile. Vous pouvez mettre à jour vos informations personnelles ci-dessous. Si vous désirez changer votre mot de passe ou votre adresse courriel, veuillez cliquer sur <b>Paramètres</b> en utilisant le menu de navigation ci-contre.
        </p>
        <br />
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={onSubmit}
        >
          {/* Prénom */}
          <div>
            <label htmlFor="firstName" className="block mb-1">
              Prénom
            </label>
            <input
              id="firstName"
              type="text"
              value={updateProfile.firstName}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  firstName: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Nom de famille */}
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Nom de famille
            </label>
            <input
              id="lastName"
              type="text"
              value={updateProfile.lastName}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  lastName: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
