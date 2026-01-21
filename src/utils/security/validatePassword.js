const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const special = /[^A-Za-z0-9]/;
    const noSpace = /^\S*$/;

    let errors = "";
    if (!minLength.test(password)) {
      errors = errors + "Le mot de passe doit contenir au moins 8 caractères.\n";
    }
    if (!uppercase.test(password)) {
      errors = errors + "Le mot de passe doit contenir au moins une lettre majuscule.\n";
    }
    if (!lowercase.test(password)) {
      errors =  errors + "Le mot de passe doit contenir au moins une lettre minuscule.\n";
    }
    if (!digit.test(password)) {
      errors = errors + "Le mot de passe doit contenir au moins un chiffre.\n";
    }
    if (!special.test(password)) {
      errors = errors + "Le mot de passe doit contenir au moins un caractère spécial.\n";
    }
    if (!noSpace.test(password)) {
      errors = errors + "Le mot de passe ne doit pas contenir d'espace.\n";
    }
    return errors;
};

export { validatePassword };