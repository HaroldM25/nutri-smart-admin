import axios from 'axios';

export const SERVER_URL =
  process.env.SERVER_URL ||
  'https://nutri-smart-server-4bff354fb1dd.herokuapp.com/api/';

export default axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
