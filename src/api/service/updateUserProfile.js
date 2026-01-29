import API from "@/api/client";
import updateLocalData from "@/utils/tools/updateLocalData";

const updateProfileHandler = async ({
  e,
  updateProfile,
  setIsLoading,
  setError,
  setSuccess,
  setErrorMessage
}) => {
  e.preventDefault();

  // Reset états UI
  setError(null);
  setSuccess(false);
  setIsLoading(true);

  try {

    // Payload
    // 🔁 Exemple d’appel API (à adapter)
    const name = `${updateProfile.firstName} ${updateProfile.lastName}`;
    const payload = {
      "name": name,
      "phoneNumber": updateProfile.phoneNumber,
      "city": updateProfile.city,
      "location": updateProfile.location
    }
    const destinator = localStorage.getItem("userId");
    const response = await API.patch(`/v1/user/${destinator}`, payload);
    if (response.status !== 200) {
      // On essaye de prendre le message d'erreur
      const errorMessage = response || "Erreur inconnue";
      return setError(true), setErrorMessage(errorMessage);
    }

    // On update les données
    const data = response.data.data;
    updateLocalData(data);
    setSuccess(true);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Erreur inconnue";
    setError(true);
    setErrorMessage(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

export default updateProfileHandler;