import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Footer from "@/components/Footer";
import LoginForm from "@/components/Form/LoginForm";
import SignUpForm from "@/components/Form/SignUpForm";
import Logo from "@/components/Header/Logo";

import { loginRequest } from "@/api/auth/loginRequest";
import { createAccountRequest } from "@/api/auth/createAccountRequest";

import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";
import openApp from "@/handler/actions/openApp";

import { fastRedirect } from "@/utils/tools/fastRedirect";
import { validatePassword } from "@/utils/validator/validatePassword";
import { isValidEmail } from "@/utils/validator/isValidEmail";
import useIsMobile from "@/utils/tools/useIsMobile";
import getParams from "@/utils/tools/getParams";

import { login_quotes, signup_quotes, quoteRandomizer } from "./Quotes";

function AuthPage() {
  const [authSuccess, setAuthSuccess] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const [isLogin, setIsLogin] = useState(true);

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
    role: "parent",
    acceptTerms: false,
  });
  const [loginQuote] = useState(() => quoteRandomizer(login_quotes));
  const [signupQuote] = useState(() => quoteRandomizer(signup_quotes));

  const [passwordError, setPasswordError] = useState("");

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const params = getParams();

  useEffect(() => {
    setIsLogin(location.pathname !== "/auth/register");
  }, [location.pathname]);

  useEffect(() => {
    const justLoggedOut =
      params.logged_out === "true" || params.auth_needed === "true";

    if (justLoggedOut) {
      localStorage.clear();
    }
  }, [params.logged_out, params.auth_needed]);

  // Connexion
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setIsLoginLoading(true);

    const response = await loginRequest(loginEmail, loginPassword);

    const loginSuccess = response.status === "success";

    setAuthSuccess(loginSuccess);

    if (!loginSuccess) {
      setErrorMessage(response.error || "Erreur de connexion");
      setIsLoginLoading(false);
      return;
    }

    // Traitement de l'A2F
    if (response.data.requires_2fa) {
      const userId = response.data.user_id;
      const method = response.data.method_2fa;
      const challengeId = response.data.challenge_id;

      if (params.on_success === "open_app") {
        navigate(
          `/auth/login/a2f/${userId}/${method}/${challengeId}?on_success=open_app`,
        );
      } else {
        navigate(`/auth/login/a2f/${userId}/${method}/${challengeId}`);
      }

      return;
    }

    loginSuccessHandler(response.data);

    // Création de la micro-session de transport
    if (params.on_success === "open_app") {
      await openApp();
      return;
    }

    fastRedirect("/user/profile");
    setIsLoginLoading(false);
  };

  // Inscription
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (isSignupLoading) {
      return;
    }

    setIsSignupLoading(true);
    setSignupErrorMessage("");

    const passwordErrors = validatePassword(signupData.password);

    const emailIsValid = isValidEmail(signupData.email);
    if (!emailIsValid && signupData.role !== "enfant") {
      setSignupSuccess(false);
      setIsSignupLoading(false);

      setSignupErrorMessage(
        "Le courriel ou le mot de passe ne sont pas valides.",
      );
    }

    if (passwordErrors.length > 0) {
      setSignupSuccess(false);
      setIsSignupLoading(false);
      setPasswordError(passwordErrors);

      setSignupErrorMessage(
        "Le mot de passe n'est pas valide.",
      );
      

      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setSignupSuccess(false);
      setIsSignupLoading(false);

      setSignupErrorMessage("Les mots de passe ne correspondent pas.");

      return;
    }

    setPasswordError([]);

    /*
     * On retire les données qui ne doivent pas être
     * envoyées à l'API.
     */
    const { confirmPassword, acceptTerms, ...accountData } = signupData;

    let requestData = accountData;

    /*
     * Un enfant ne fournit pas :
     * - téléphone
     * - ville
     * - adresse
     */
    if (signupData.role === "enfant") {
      const { phone, city, address, ...childAccountData } = accountData;

      requestData = childAccountData;
    }

    try {
      const response = await createAccountRequest(requestData);

      const isSuccess = response.status === "success";

      if (!isSuccess) {
        setSignupSuccess(false);

        setSignupErrorMessage(
          response.error || "Erreur lors de la création du compte.",
        );

        return;
      }

      setSignupSuccess(true);

      loginSuccessHandler(response.data);

      fastRedirect("/user/profile");
    } catch {
      setSignupSuccess(false);

      setSignupErrorMessage(
        "Une erreur est survenue lors de la création du compte.",
      );
    } finally {
      setIsSignupLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Logo */}
      <div
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
        <Logo bigTitleColorWhite={!isMobile} />
      </div>

      {/* 
      Le main prend tout l'espace disponible entre
      le haut de la page et le footer.
    */}
      <main className="relative flex flex-1 overflow-hidden bg-blue-900">
        {/* Fenêtre du slider */}
        <div className="relative flex w-full flex-1 overflow-hidden">
          {/* 
          Rail du slider :
          - 200% de la largeur de l'écran
          - ne doit jamais rétrécir
          - prend toute la hauteur disponible
        */}
          <div
            className={`flex w-[200%] shrink-0 items-stretch transition-transform duration-700 ease-in-out ${
              isLogin ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* ================================================= */}
            {/* SIGNUP                                            */}
            {/* ================================================= */}

            <div className="flex w-1/2 shrink-0 flex-col md:flex-row">
              {/* Formulaire */}
              <section className="flex w-full items-center justify-center bg-gray-50 p-6 md:w-1/2 md:p-10">
                <SignUpForm
                  navigate={navigate}
                  authSuccess={signupSuccess}
                  signupErrorMessage={signupErrorMessage}
                  signupData={signupData}
                  setSignupData={setSignupData}
                  passwordError={passwordError}
                  setPasswordError={setPasswordError}
                  isSignupLoading={isSignupLoading}
                  onSubmit={handleSignupSubmit}
                />
              </section>

              {/* Partie bleue */}
              <section className="hidden bg-blue-900 md:flex md:w-1/2 md:items-center md:justify-center">
                <div className="w-full max-w-lg p-10 text-white">
                  <img
                    src="/images/progression.png"
                    alt="Illustration"
                    className="mx-auto mb-6 w-3/4 rounded-lg shadow-lg"
                  />

                  <blockquote
                    className="text-center text-xl italic"
                    dangerouslySetInnerHTML={{
                      __html: signupQuote,
                    }}
                  />

                  <div className="mt-3 text-center">
                    Déjà un compte ?
                    <br />
                    <button
                      type="button"
                      onClick={() => navigate("/auth/login")}
                      className="mt-2 cursor-pointer rounded-full bg-blue-400 p-4 hover:bg-blue-300"
                    >
                      Se connecter →
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* ================================================= */}
            {/* LOGIN                                             */}
            {/* ================================================= */}

            <div className="flex w-1/2 shrink-0 flex-col md:flex-row">
              {/* Partie bleue */}
              <section className="hidden bg-blue-900 md:flex md:w-1/2 md:items-center md:justify-center">
                <div className="w-full max-w-lg p-10 text-white">
                  <img
                    src="/images/cooperation.png"
                    alt="Illustration"
                    className="mx-auto mb-6 w-3/4 rounded-lg shadow-lg"
                  />

                  <blockquote
                    className="text-center text-xl italic"
                    dangerouslySetInnerHTML={{
                      __html: loginQuote,
                    }}
                  />

                  <div className="mt-3 text-center">
                    Pas de compte ?
                    <br />
                    <button
                      type="button"
                      onClick={() => navigate("/auth/register")}
                      className="mt-2 cursor-pointer rounded-full bg-blue-400 p-4 hover:bg-blue-300"
                    >
                      ← S'inscrire
                    </button>
                  </div>
                </div>
              </section>

              {/* Formulaire */}
              <section className="flex w-full items-center justify-center bg-gray-50 p-6 md:w-1/2 md:p-10">
                <LoginForm
                  navigate={navigate}
                  authSuccess={authSuccess}
                  errorMessage={errorMessage}
                  loginEmail={loginEmail}
                  loginPassword={loginPassword}
                  isLoginLoading={isLoginLoading}
                  onEmailChange={setLoginEmail}
                  onPasswordChange={setLoginPassword}
                  onSubmit={handleLoginSubmit}
                  onForgotPassword={() => navigate("/auth/password-recovery")}
                  params={params}
                />
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AuthPage;
