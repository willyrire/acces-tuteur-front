import API from "../client";

const verifyEmail = async (code) => {
  try {
    const payload = {
      token: String(code),
    };
    const response = await API.patch("/v1/user/email-verification", payload);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export default verifyEmail;
