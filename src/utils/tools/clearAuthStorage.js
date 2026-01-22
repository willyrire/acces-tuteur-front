function clearAuthStorage() {
  // Non authentifié
  localStorage.removeItem("userCity");
  localStorage.removeItem("email");
  localStorage.removeItem("authIat");
  localStorage.removeItem("isEmailVerified");
  localStorage.removeItem("name");
  localStorage.removeItem("role");
  localStorage.removeItem("userId");
  localStorage.removeItem("lastUpdate");

  localStorage.removeItem("Authorization");
  // On supprime juste ce qui a été créé lors de la connexion
  // On ne supprime pas les préférences utilisateur ou autres données persistantes
}

export { clearAuthStorage };