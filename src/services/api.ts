import axios from 'axios';

const BACKEND_URL = 'https://gotiny.cc/api';

export const createAPI = () => axios.create({ baseURL: BACKEND_URL });
