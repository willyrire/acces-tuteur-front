import API from '../client';

const verifyEmail = async (code) => {
    const payload = {
        "token": String(code)
    };
    const response = await API.patch('/v1/user/email-verification', payload);
    return response.data;
}

export default verifyEmail;