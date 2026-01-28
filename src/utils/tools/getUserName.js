async function getUserNameLastNameFirstInitial() {
  const name = localStorage.getItem("name");
  if (!name) return null;

  const parts = name.trim().split(" ");
  if (parts.length === 0) return null;

  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
  const firstNameInitial = lastName ? lastName[0] + "." : "";

  return `${firstNameInitial} ${firstName}`;
}

const getFirstName = () => {
  const name = localStorage.getItem("name");
  if (!name) return null;
  const parts = name.trim().split(" ");
  return parts[0];
}

const getLastName = () => {
  const name = localStorage.getItem("name");
  if (!name) return null;
  const parts = name.trim().split(" ");
  return parts.length > 1 ? parts[parts.length - 1] : "";
}

export { getUserNameLastNameFirstInitial, getFirstName, getLastName };