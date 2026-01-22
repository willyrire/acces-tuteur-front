import React from "react";
import { formatPhoneNumber } from "@/utils/tools/formatPhoneNumber";
import { validatePassword } from "@/utils/validator/validatePassword";
import { isValidEmail } from "@/utils/validator/isValidEmail";

export default function SignUpForm({
  authSuccess,
  signupErrorMessage,
  signupData,
  setSignupData,
  passwordError,
  setPasswordError,
  isSignupLoading,
  onSubmit,
}) {
  const [isPasswordMatch, setIsPasswordMatch] = React.useState(true);
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-10 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
    >
      {authSuccess === false && (
        <div className="mb-4 p-3 col-span-2 bg-red-100 border border-red-400 text-red-700 rounded">
          <b>Erreur : </b>
          {signupErrorMessage}
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6 text-center md:col-span-2 text-gray-800">
        Créer un compte
      </h2>
      <label className="flex flex-col gap-1 md:col-span-2 text-gray-700 font-medium">
        Vous êtes :
        <select
          value={signupData.role}
          onChange={(e) =>
            setSignupData({ ...signupData, role: e.target.value })
          }
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="parent">Parent</option>
          <option value="enfant">Enfant</option>
          <option value="tuteur">Tuteur</option>
        </select>
      </label>
      <input
        type="text"
        placeholder="Prénom"
        value={signupData.firstName}
        onChange={(e) =>
          setSignupData({ ...signupData, firstName: e.target.value })
        }
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Nom"
        value={signupData.lastName}
        onChange={(e) =>
          setSignupData({ ...signupData, lastName: e.target.value })
        }
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="tel"
        placeholder="Numéro de téléphone"
        value={signupData.phone}
        onChange={(e) => {
          const formatted = formatPhoneNumber(e.target.value);
          setSignupData({ ...signupData, phone: formatted });
        }}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Ville"
        value={signupData.city}
        onChange={(e) => setSignupData({ ...signupData, city: e.target.value })}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Adresse"
        value={signupData.address}
        onChange={(e) =>
          setSignupData({ ...signupData, address: e.target.value })
        }
        className="md:col-span-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={signupData.email}
        onChange={(e) =>
          setSignupData({ ...signupData, email: e.target.value })
        }
        className={`w-full col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          signupData.email && !isValidEmail(signupData.email)
            ? "border-red-500"
            : "border-gray-300"
        }`}
        required
      />
      {signupData.email && !isValidEmail(signupData.email) && (
        <p className="text-sm col-span-2 text-red-600">
          Veuillez entrer un email valide
        </p>
      )}
      <input
        type="password"
        placeholder="Mot de passe"
        value={signupData.password}
        onChange={(e) => {
          const value = e.target.value;
          setSignupData({ ...signupData, password: value });

          // Validation password
          setPasswordError(validatePassword(value));

          // Vérification correspondance
          if (signupData.confirmPassword) {
            setIsPasswordMatch(value === signupData.confirmPassword);
          }
        }}
        className={`w-full col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          passwordError.length > 0 ? "border-red-500" : "border-gray-300"
        }`}
      />
      {passwordError.length > 0 && (
        <ul className="md:col-span-2 text-sm text-red-600 list-disc list-inside">
          {passwordError.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={signupData.confirmPassword}
        onChange={(e) => {
          const value = e.target.value;
          setSignupData({ ...signupData, confirmPassword: value });
          setIsPasswordMatch(signupData.password === value);
        }}
        className={`md:col-span-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          !isPasswordMatch && signupData.confirmPassword
            ? "border-red-500"
            : "border-gray-300"
        }`}
        required
      />
      {!isPasswordMatch && signupData.confirmPassword && (
        <p className="md:col-span-2 text-sm text-red-600">
          Les mots de passe ne correspondent pas
        </p>
      )}
      <label className="md:col-span-2 flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          checked={signupData.acceptTerms}
          onChange={(e) =>
            setSignupData({ ...signupData, acceptTerms: e.target.checked })
          }
          className="mt-1"
        />
        <span>
          J'accepte les{" "}
          <a href="/legal/overwiew" className="text-blue-600 hover:underline">
            conditions d'utilisation
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition md:col-span-2"
      >
        {isSignupLoading ? "Traitement..." : "Créer un compte"}
      </button>
      <p className="mt-4 text-center text-gray-500 text-sm md:col-span-2"> </p>
    </form>
  );
}
