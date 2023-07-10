import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'https://64ac07459edb4181202f008d.mockapi.io',
});

export const apiGet = () => mainApi.get('/contacts');
export const apiAdd = user => mainApi.post('/contacts', user);
export const apiDel = id => mainApi.delete(`/contacts/${id}`);
