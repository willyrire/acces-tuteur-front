import API from "@/api/client";
import updateLocalData from "@/utils/tools/updateLocalData";

const updateProfileHandler = async ({
  e,
  updateProfile,
  setIsLoading,
  setError,
  setSuccess,
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
    if (response.data.status !== "success") {
      return setError(true);
    }

    // On update les données
    const data = response.data.data;
    updateLocalData(data);
    setSuccess(true);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

export default updateProfileHandler;