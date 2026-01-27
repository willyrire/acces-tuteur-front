const updateLocalData = (userData) => {
    localStorage.setItem("userCity", userData.city);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("authIat", userData.iat);
    localStorage.setItem("isEmailVerified", userData.isEmailVerified);
    localStorage.setItem("name", userData.name);
    localStorage.setItem("role", userData.role);
    localStorage.setItem("userId", userData.id);
    localStorage.setItem("lastUpdate", userData.lastUpdate);
}
export default updateLocalData;