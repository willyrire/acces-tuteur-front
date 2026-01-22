import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { loginRequest } from "@/api/auth/loginRequest";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";
import { fastRedirect } from "@/utils/tools/fastRedirect";
import { validatePassword } from "@/utils/validator/validatePassword";
import LoginForm from "@/components/Form/LoginForm";
import SignUpForm from "@/components/Form/SignUpForm";
import { isValidEmail } from "@/utils/validator/isValidEmail";
import { createAccountRequest } from "@/api/auth/createAccountRequest";
import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";

function AuthPage() {
  const [authSuccess, setAuthSuccess] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
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
    role: "parent",
    acceptTerms: false,
  });

  const [passwordError, setPasswordError] = useState("");

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  // Login submit handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true);

    const response = await loginRequest(loginEmail, loginPassword);
    const loginSuccess = response.status === "success";

    setAuthSuccess(loginSuccess);
    console.log("Response from loginRequest:", response);

    if (!loginSuccess) {
      setErrorMessage(response.error || "Erreur de connexion");
      setIsLoginLoading(false);
      return;
    }

    loginSuccessHandler(response.data);
    fastRedirect(`/${response.data.role}/dashboard`);
    setIsLoginLoading(false);
  };

  // Signup submit handler
  const handleSignupSubmit = async (e) => {
    console.log("Signup data submitted");
    e.preventDefault();
    setIsSignupLoading(true);
    const error = validatePassword(signupData.password);
    const emailError = isValidEmail(signupData.email);
    console.log(error == [] + " | " + emailError);
    if (error == [] || !emailError) {
      console.log("Une erreur");
      setSignupSuccess(false);
      setIsSignupLoading(false);
      setPasswordError(error);
      setSignupErrorMessage(
        "Le courriel ou le mot de passe ne sont pas valides.",
      );
      return;
    }
    setPasswordError("");

    const response = await createAccountRequest(
      signupData.email,
      signupData.password,
      signupData.firstName,
      signupData.lastName,
      signupData.role,
      signupData.city,
      signupData.address,
      signupData.phone,
    );

    console.log("Response from createAccountRequest:", response);

    const signupSuccess = response.status === "success";

    if (!signupSuccess) {
      setSignupSuccess(false);
      setSignupErrorMessage(
        response.error || "Erreur lors de la création du compte",
      );
      setIsSignupLoading(false);
      return;
    }
    loginSuccessHandler(response.data);
    fastRedirect(`/${response.data.role}/dashboard`);
    setIsSignupLoading(false);
    console.log(
      "Une erreur s'est produite lors de la création du compte : ",
      response,
    );
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className={`absolute top-4 left-4 z-50 transform transition-transform duration-700 ease-in-out ${
          isLogin ? "translate-x-0" : "translate-x-[calc(100vw/2)]"
        }`}
      >
        <Logo bigTitleColorWhite={true} />
      </div>
      <main className="flex-1 overflow-hidden bg-gray-50">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
              isLogin ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* SIGNUP */}
            <div className="w-1/2 flex flex-col md:flex-row">
              <div className="flex w-full md:w-1/2 justify-center items-center p-6 md:p-10">
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
              </div>

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
                      Se Connecter →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LOGIN */}
            <div className="w-1/2 flex flex-col md:flex-row">
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
                      ← S'inscrire
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex w-full md:w-1/2 justify-center items-center p-6 md:p-10">
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
                />
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
