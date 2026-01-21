import React from "react";

export default function LoginForm({
  authSuccess,
  errorMessage,
  loginEmail,
  loginPassword,
  isLoginLoading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onForgotPassword,
}) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      {authSuccess === false && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <b>Erreur : </b>
          {errorMessage}
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Bienvenue
      </h2>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => onEmailChange(e.target.value)}
          className={`w-full p-3 border ${
            authSuccess === false ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={loginPassword}
          onChange={(e) => onPasswordChange(e.target.value)}
          className={`w-full p-3 border ${
            authSuccess === false ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
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
        <br />
        <button
          onClick={onForgotPassword}
          className="text-blue-600 hover:underline"
        >
          Mot de passe oublié?
        </button>
      </p>
    </div>
  );
}