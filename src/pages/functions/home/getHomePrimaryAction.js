export function getHomePrimaryAction(isAuth) {
  if (isAuth) {
    return {
      href: "/tuteurs",
      label: "Trouver un tuteur",
    };
  }

  return {
    href: "/inscription",
    label: "Commencer gratuitement",
  };
}