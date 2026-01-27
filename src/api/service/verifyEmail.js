import API from '../client';

export default async function verifyEmail(code) {
    payload = {
        "token": code
    }
    const response = await API.patch('/v1/user/email-verification', payload);
    return response.data;
}