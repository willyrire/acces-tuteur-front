import React from "react";
import { formatPhoneNumber } from "@/utils/tools/formatPhoneNumber";
import { validatePassword } from "@/utils/validator/validatePassword";
import { isValidEmail } from "@/utils/validator/isValidEmail";
import useIsMobile from "@/utils/tools/useIsMobile";

export default function SignUpForm({
  navigate,
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
  const isMobile = useIsMobile();

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-2xl
                  grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
    >
      {authSuccess === false && (
        <div className="mb-4 p-3 col-span-1 md:col-span-2 bg-red-100 border border-red-400 text-red-700 rounded">
          <b>Erreur : </b>
          {signupErrorMessage}
        </div>
      )}

      <h2 className={`text-3xl font-bold mb-6 text-center col-span-1 md:col-span-2 text-gray-800`}>
        Créer un compte
      </h2>

      {/* Rôle */}
      <label className={`flex flex-col gap-1 ${isMobile ? "col-span-1" : "md:col-span-2"} text-gray-700 font-medium`}>
        Vous êtes :
        <select
          value={signupData.role}
          onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="parent">Parent</option>
          <option value="enfant">Enfant</option>
          <option value="tuteur">Tuteur</option>
        </select>
      </label>

      {/* Prénom */}
      <input
        type="text"
        placeholder="Prénom"
        value={signupData.firstName}
        onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      {/* Nom */}
      <input
        type="text"
        placeholder="Nom"
        value={signupData.lastName}
        onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      {/* Téléphone */}
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

      {/* Ville */}
      <input
        type="text"
        placeholder="Ville"
        value={signupData.city}
        onChange={(e) => setSignupData({ ...signupData, city: e.target.value })}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      {/* Adresse */}
      <input
        type="text"
        placeholder="Adresse"
        value={signupData.address}
        onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${isMobile ? "col-span-1" : "md:col-span-2"}`}
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={signupData.email}
        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${signupData.email && !isValidEmail(signupData.email) ? "border-red-500" : "border-gray-300"} ${isMobile ? "col-span-1" : "md:col-span-2"}`}
        required
      />
      {signupData.email && !isValidEmail(signupData.email) && (
        <p className={`${isMobile ? "col-span-1" : "md:col-span-2"} text-sm text-red-600`}>
          Veuillez entrer un email valide
        </p>
      )}

      {/* Mot de passe */}
      <input
        type="password"
        placeholder="Mot de passe"
        value={signupData.password}
        onChange={(e) => {
          const value = e.target.value;
          setSignupData({ ...signupData, password: value });
          setPasswordError(validatePassword(value));

          if (signupData.confirmPassword) {
            setIsPasswordMatch(value === signupData.confirmPassword);
          }
        }}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${passwordError.length > 0 ? "border-red-500" : "border-gray-300"} ${isMobile ? "col-span-1" : "md:col-span-2"}`}
      />
      {passwordError.length > 0 && (
        <ul className={`${isMobile ? "col-span-1" : "md:col-span-2"} text-sm text-red-600 list-disc list-inside text-left`}>
          {passwordError.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}

      {/* Confirmation mot de passe */}
      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={signupData.confirmPassword}
        onChange={(e) => {
          const value = e.target.value;
          setSignupData({ ...signupData, confirmPassword: value });
          setIsPasswordMatch(signupData.password === value);
        }}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${!isPasswordMatch && signupData.confirmPassword ? "border-red-500" : "border-gray-300"} ${isMobile ? "col-span-1" : "md:col-span-2"}`}
        required
      />
      {!isPasswordMatch && signupData.confirmPassword && (
        <p className={`${isMobile ? "col-span-1" : "md:col-span-2"} text-sm text-red-600`}>
          Les mots de passe ne correspondent pas
        </p>
      )}

      {/* Accept Terms */}
      <label className={`flex items-start gap-3 text-sm text-gray-600 ${isMobile ? "col-span-1" : "md:col-span-2"}`}>
        <input
          type="checkbox"
          required
          checked={signupData.acceptTerms}
          onChange={(e) => setSignupData({ ...signupData, acceptTerms: e.target.checked })}
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

      {/* Submit */}
      <button
        type="submit"
        className={`w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition ${isMobile ? "col-span-1" : "md:col-span-2"}`}
      >
        {isSignupLoading ? "Traitement..." : "Créer un compte"}
      </button>

      {/* Login */}
      <div className={`text-center ${isMobile ? "col-span-1" : "md:col-span-2"}`}>
        Déjà un compte ?{" "}
        <button
          onClick={() => navigate("/auth/login")}
          className="hover:underline text-blue-600"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
}
