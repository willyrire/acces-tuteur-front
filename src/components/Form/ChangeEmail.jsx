import React from "react";
import { Settings } from "lucide-react";
const ChangeEmail = ({ changeEmail, setChangeEmail, onSubmit }) => {
  return (
    <>
      <div className="flex flex-col mt-3">
        <form onSubmit={onSubmit}>
          {/* Nouvelle adresse courriel */}
          <input
            id="newEmail"
            type="email"
            placeholder="Nouvelle adresse courriel"
            onChange={(e) =>
              setChangeEmail({
                ...changeEmail,
                newEmail: e.target.value,
              })
            }
            className="w-full my-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {/* Mot de passe actuel */}
          <input
            id="password"
            type="password"
            placeholder="Mot de passe actuel"
            onChange={(e) =>
              setChangeEmail({
                ...changeEmail,
                currentPassword: e.target.value,
              })
            }
            className="w-full my-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 cursor-pointer bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition my-4`}
          >
            Modifier mon adresse courriel
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangeEmail;
