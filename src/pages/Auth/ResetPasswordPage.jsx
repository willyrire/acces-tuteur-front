import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import passwordResetRequest from "@/api/auth/passwordResetRequest";
import { fastRedirect } from "@/utils/tools/fastRedirect";
import { validatePassword } from "@/utils/validator/validatePassword";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("passwordError"); // idle | loading | success | error | passwordError
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("code");

  if (!token) {
    // Si pas de token, rediriger
    fastRedirect("/auth/password-recovery");
  }

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // ✅ Vérification que le mot de passe et la confirmation matchent
    if (formData.password !== formData.confirmPassword) {
      setStatus("error");
      setMessage("Le mot de passe et sa confirmation ne correspondent pas.");
      return;
    }

    // ✅ Validation du mot de passe
    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      setStatus("error");
      setMessage(passwordErrors.join(" ")); // concatène les messages en une seule chaîne
      return;
    }

    try {
      const result = await passwordResetRequest(token, formData.password);
      console.log(result);
      if (result.status === "success") {
        setStatus("success");
        setMessage(
          result.message ||
            "Mot de passe réinitialisé avec succès. Vous pouvez maintenant vous connecter.",
        );
        setTimeout(() => fastRedirect("/auth/login"), 3000);
      } else {
        console.log(result);
        setStatus("error");
        setMessage(
          result.message ||
            result.error
        );
      }
    } catch (err) {
        console.log(err);
      setStatus("error");
      setMessage("Une erreur inattendue est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isAuth={false}
        userName={null}
        minimalist={true}
        emptyBg={false}
        bigTitleColorWhite={false}
      />

      <main className="mt-20 flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Réinitialisation du mot de passe
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={formData.password}
                onChange={(e) => {
                  const newPassword = e.target.value;
                  setFormData({ ...formData, password: newPassword });

                  // Validation en direct
                  const errors = validatePassword(newPassword);
                  if (errors.length > 0) {
                    setStatus("passwordError");
                  } else {
                    setStatus("idle");
                  }

                  // On set le message pour la liste d'erreurs
                  setErrorMessage(errors); // ⚠️ ici message devient un array
                }}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Liste des règles de mot de passe */}
            {Array.isArray(errorMessage) && errorMessage.length > 0 && (
              <ul className="text-left mt-2 text-sm list-disc list-inside text-red-600">
                {errorMessage.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            )}

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirmez le nouveau mot de passe"
                value={formData.confirmPassword}
                onChange={(e) => {
                  const newConfirm = e.target.value;
                  setFormData({ ...formData, confirmPassword: newConfirm });

                  // Vérification correspondance
                  if (formData.password !== newConfirm) {
                    setStatus("passwordError");
                    setMessage([
                      "Le mot de passe et sa confirmation ne correspondent pas.",
                    ]);
                  } else{
                    setStatus("idle");
                    setMessage([]);
                  }
                }}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={
                status === "loading" ||
                (Array.isArray(errorMessage) && errorMessage.length > 0) || status === "passwordError"
                || formData.password !== formData.confirmPassword
              }
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Réinitialiser le mot de passe"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm text-center ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ResetPasswordPage;
