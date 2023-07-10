import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'https://64ac07459edb4181202f008d.mockapi.io',
});

export const apiGet = () => axios.get('/contacts');
export const apiAdd = user => axios.post('/contacts', user);
export const apiDel = id => axios.delete(`/contacts/${id}`);
