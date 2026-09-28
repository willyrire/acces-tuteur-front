export function getHomePrimaryAction(isAuth) {
  if (isAuth) {
    return {
      href: "/auth/register",
      label: "Trouver un tuteur",
    };
  }

  return {
    href: "/auth/register",
    label: "Commencer gratuitement",
  };
}