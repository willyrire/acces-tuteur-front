import React from "react";
import { Settings } from "lucide-react";
const ChangePassword = ({ changePassword, setChangePassword, onSubmit }) => {
  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={onSubmit}>
          {/* Mot de passe actuel */}
          <label htmlFor="currentPassword" className="block mb-1">
            Mot de passe actuel
          </label>
          <input
            id="currentPassword"
            type="password"
            placeholder="Mot de passe actuel"
            onChange={(e) =>
              setChangePassword({
                ...changePassword,
                currentPassword: e.target.value,
              })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition my-4`}
          >
            Modifier mon mot de passe
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
