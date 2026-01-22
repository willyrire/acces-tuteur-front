const validatePassword = (password) => {
  const minLength = /.{8,}/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const digit = /\d/;
  const special = /[^A-Za-z0-9]/;
  const noSpace = /^\S*$/;

  const errors = [];

  if (!minLength.test(password)) {
    errors.push("Le mot de passe doit contenir au moins 8 caractères.");
  }
  if (!uppercase.test(password)) {
    errors.push("Le mot de passe doit contenir au moins une lettre majuscule.");
  }
  if (!lowercase.test(password)) {
    errors.push("Le mot de passe doit contenir au moins une lettre minuscule.");
  }
  if (!digit.test(password)) {
    errors.push("Le mot de passe doit contenir au moins un chiffre.");
  }
  if (!special.test(password)) {
    errors.push("Le mot de passe doit contenir au moins un caractère spécial.");
  }
  if (!noSpace.test(password)) {
    errors.push("Le mot de passe ne doit pas contenir d'espace.");
  }

  return errors ; // ✅ retourne un array de messages
};

export { validatePassword };