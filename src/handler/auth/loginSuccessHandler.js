import getCookie from "@/utils/getCookie";

function loginSuccessHandler(data) {
    // On stock les différentes données dans le localStorage
    localStorage.setItem("userCity", data.city);
    localStorage.setItem("email", data.email);
    localStorage.setItem("iat", data.iat);
    localStorage.setItem("isEmailVerified", data.isEmailVerified);
    localStorage.setItem("name", data.name);
    localStorage.setItem("role", data.role);
    localStorage.setItem("userId", data.id);
    localStorage.setItem("lastUpdate", data.lastUpdate);

    // On stock également le token d'authentification
    const AuthorizationValue = getCookie("Authorization");
    localStorage.setItem("Authorization", AuthorizationValue);
}

export { loginSuccessHandler };