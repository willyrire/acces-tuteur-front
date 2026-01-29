import React from "react";
import { Settings } from "lucide-react";
const UpdateProfile = ({ updateProfile, setUpdateProfile, onSubmit }) => {
  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={onSubmit}>
          {/* Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
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
                required
              />
            </div>
            <div>
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
                  required
                />
              </div>
            </div>
            <div>
              {/* Ville */}
              <label htmlFor="city">Ville</label>
              <input
                id="city"
                type="text"
                value={updateProfile.city}
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    city: e.target.value,
                  })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {/* Ville */}
              <p className={`text-xs text-gray-400 w-full pl-3`}>
                City data provided by{" "}
                <a
                  href="https://www.geonames.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GeoNames
                </a>
              </p>
            </div>
            <div>
              {/* Téléphone */}
              <label htmlFor="phone">
                Téléphone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="text"
                value={updateProfile.phoneNumber}
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    phoneNumber: e.target.value,
                  })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          {/* Location */}
          <label htmlFor="location">
            Adresse<span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            type="text"
            value={updateProfile.location}
            onChange={(e) =>
              setUpdateProfile({
                ...updateProfile,
                location: e.target.value,
              })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition my-4`}
          >
            Mettre à jour mon profil
          </button>

          {/* * */}
          <p className="text-sm text-gray-500 mt-4">
            <span className="text-red-500">*</span> : À noter - ces champs ne
            font l’objet d’aucune vérification d’identité. Il est donc possible
            que plusieurs utilisateurs partagent des informations similaires. Il
            vous revient de fournir des renseignements exacts afin de bénéficier
            du meilleur service possible.
          </p>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
