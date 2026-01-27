import API from '../client';

export default async function getUserData() {
    const user = localStorage.getItem('user') ?? 67; // self
    const response = await API.get('/v1/user/'+user);
    return response.data;
}