import API from '../client';

export default async function sendEmailVerification() {
    const response = await API.post('/v1/user/email-verification');
    return response.data;
}