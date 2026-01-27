import API from '../client';

export default async function verifyEmail(code) {
    const response = await API.patch('/v1/user/email-verification', { "token":code });
    return response.data;
}