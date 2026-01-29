import API from "@/api/client";
import updateLocalData from "@/utils/tools/updateLocalData";

const changePasswordFinalize = async ({
  e,
  changePassword,
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
    const payload = {
      "oldPassword": changePassword.currentPassword,
      "newPassword": changePassword.newPassword
    }
    const response = await API.put(`/v1/user/change-password`, payload);
    console.log("Response update profile:", response);
    if (response.status !== 200) {
      // On essaye de prendre le message d'erreur
      const errorMessage = response || "Erreur inconnue";
      console.log("Error updating profile:", errorMessage);
      return setError(true), setErrorMessage(errorMessage);
    }
    setSuccess(true);
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Erreur inconnue";
    setError(true);
    setErrorMessage(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

export default changePasswordFinalize;