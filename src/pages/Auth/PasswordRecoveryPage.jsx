import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import passwordRecoveryRequest from "@/api/auth/passwordRecoveryRequest";
import useIsMobile from "@/utils/tools/useIsMobile";
import Logo from "@/components/Header/Logo";

function PasswordRecoveryPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const isMobile = useIsMobile();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Envoie du courriel à l'API
    try {
      await passwordRecoveryRequest(email);
        setStatus("success");
        setMessage("Si cet email est enregistré, un lien de réinitialisation a été envoyé.");
    }catch (error) {
        setStatus("error");
        setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? <div
        className={`${
          isMobile
            ? "bg-blue-200 w-full ml-0 top-0 left-0 p-4"
            : "absolute top-4 left-4"
        } z-50 transform transition-transform duration-700 ease-in-out ${
          isMobile
            ? ""
            : isLogin
              ? "translate-x-0"
              : "translate-x-[calc(100vw/2)]"
        }`}
      >
        <Logo />
      </div> : <Header
        isAuth={false}
        userName={null}
        minimalist={true}
        emptyBg={false}
        bigTitleColorWhite={false}
      />}

      <main className={`${isMobile ? "" : "mt-"} flex-grow flex items-center justify-center p-4`}>
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Mot de passe oublié
          </h1>

          <p className="text-sm text-gray-600 text-center mb-6">
            Entrez votre courriel et nous vous enverrons un lien pour réinitialiser
            votre mot de passe.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Adresse courriel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Envoyer le lien"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm text-center ${
                status === "success"
                  ? "text-green-600"
                  : "text-red-600"
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

export default PasswordRecoveryPage;
