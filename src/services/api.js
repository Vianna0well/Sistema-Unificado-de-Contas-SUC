import Axios from 'axios';
const URL = 'https://megahack2020.herokuapp.com/api/boleto';

const api = Axios.create({
     baseURL: URL 
})

export default api;
