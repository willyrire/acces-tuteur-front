export function getHomePrimaryAction(isAuth) {
  if (isAuth) {
    return {
      href: "/auth/create-account",
      label: "Trouver un tuteur",
    };
  }

  return {
    href: "/auth/create-account",
    label: "Commencer gratuitement",
  };
}