import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { loginRequest } from "@/api/auth/loginRequest";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";
import { fastRedirect } from "@/utils/fastRedirect";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { validatePassword } from "@/utils/security/validatePassword";

function AuthPage() {
  const [authSuccess, setAuthSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (location.pathname === "/auth/create-account") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tuteur",
    acceptTerms: false,
  });

  const [passwordError, setPasswordError] = useState("");

  // Variables de chargement
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true);

    const response = await loginRequest(loginEmail, loginPassword);
    const loginSuccess = response.status === "success"; // ✅ utiliser local variable

    setAuthSuccess(loginSuccess); // ok pour mettre à jour le state
    console.log("Response from loginRequest:", response);

    if (!loginSuccess) {
      setErrorMessage(response.error || "Erreur de connexion");
      setIsLoginLoading(false);
      return; // exit pour éviter de continuer
    }

    // ✅ Succès : on navigue directement
    loginSuccessHandler(response.data);
    fastRedirect(`/${response.data.role}/dashboard`); // reload + redirection
    setIsLoginLoading(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsSignupLoading(true);
    // Module d'inscription ici
    const error = validatePassword(signupData.password);
    if (error) {
      setIsSignupLoading(false);
      setPasswordError(error);
      return;
    }
    setPasswordError("");
  };

  // <==========================RENDERING==========================>

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 overflow-hidden bg-gray-50">
        <div className="relative w-full h-full overflow-hidden">
          {/* Slider container */}
          <div
            className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
              isLogin ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* <==============================SIGNUP==========================> */}
            {/* Screen 1: Signup + Quote */}
            <div className="w-1/2 flex flex-col md:flex-row">
              {/* Signup Form (left) */}
              <div className="flex w-full md:w-1/2 justify-center items-center p-6 md:p-10">
                <form
                  onSubmit={handleSignupSubmit}
                  className="bg-white p-10 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
                >
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
                      <option value="tuteur">Tuteur</option>
                      <option value="parent">Parent</option>
                      <option value="enfant">Enfant</option>
                    </select>
                  </label>

                  <input
                    type="text"
                    placeholder="Prénom"
                    value={signupData.firstName}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        firstName: e.target.value,
                      })
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
                    onChange={(e) =>
                      setSignupData({ ...signupData, city: e.target.value })
                    }
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
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={signupData.password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSignupData({ ...signupData, password: value });
                      if (passwordError) {
                        setPasswordError(validatePassword(value));
                      }
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={signupData.confirmPassword}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="md:col-span-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />

                  {passwordError && (
                    <p className="md:col-span-2 text-sm text-red-600">
                      {passwordError}
                    </p>
                  )}

                  <label className="md:col-span-2 flex items-start gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      required
                      checked={signupData.acceptTerms}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          acceptTerms: e.target.checked,
                        })
                      }
                      className="mt-1"
                    />
                    <span>
                      J'accepte les{" "}
                      <a
                        href="/legal/overwiew"
                        className="text-blue-600 hover:underline"
                      >
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
                  <p className="mt-4 text-center text-gray-500 text-sm md:col-span-2">
                    {" "}
                  </p>
                </form>
              </div>

              {/* Quote (right) */}
              <div className="hidden md:flex md:w-1/2 justify-center items-center bg-blue-900">
                <div className="w-full max-w-lg text-white p-10">
                  <img
                    src="/images/progression.png"
                    alt="Illustration"
                    className="w-3/4 mb-6 rounded-lg shadow-lg mx-auto"
                  />
                  <blockquote className="text-xl italic text-center">
                    Rejoignez Accès tuteur et commencez votre parcours. <br />
                  </blockquote>
                  <div className="text-center mt-3">
                    Déjà un compte ? <br />
                    <button
                      onClick={() => navigate("/auth/login")}
                      className="rounded-full hover:bg-blue-300 hover:cursor-pointer bg-blue-400 p-4 mt-2"
                    >
                      {" "}
                      Se Connecter →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <==============================LOGIN==========================> */}
            {/* Screen 2: Quote + Login */}
            <div className="w-1/2 flex flex-col md:flex-row">
              {/* Quote (left) */}
              <div className="hidden md:flex md:w-1/2 justify-center items-center bg-blue-900">
                <div className="w-full max-w-lg text-white p-10">
                  <img
                    src="/images/cooperation.png"
                    alt="Illustration"
                    className="w-3/4 mb-6 rounded-lg shadow-lg mx-auto"
                  />
                  <blockquote className="text-xl italic text-center">
                    Accès tuteur : Connectez-vous avec votre futur.
                  </blockquote>
                  <div className="text-center mt-3">
                    Pas de compte ? <br />
                    <button
                      onClick={() => navigate("/auth/create-account")}
                      className="rounded-full hover:bg-blue-300 hover:cursor-pointer bg-blue-400 p-4 mt-2"
                    >
                      {" "}
                      ← S'inscrire
                    </button>
                  </div>
                </div>
              </div>

              {/* Login Form (right) */}
              <div className="flex w-full md:w-1/2 justify-center items-center p-6 md:p-10">
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                  {/* Div pour messages d'erreur */}
                  {authSuccess === false && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      <b>Erreur : </b>
                      {errorMessage}
                    </div>
                  )}
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Bienvenue
                  </h2>
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleLoginSubmit}
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={`w-full p-3 border ${authSuccess === false ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className={`w-full p-3 border ${authSuccess === false ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                      {isLoginLoading ? "Connexion..." : "Se connecter"}
                    </button>
                  </form>
                  <p className="mt-4 text-center text-gray-500 text-sm">
                    {" "}
                    <br />
                    <button
                      onClick={() => navigate("/auth/password-recovery")}
                      className="text-blue-600 hover:underline"
                    >
                      Mot de passe oublié?
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AuthPage;
