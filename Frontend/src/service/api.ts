import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333/'
    baseURL: "http://cb9f5b13ef56.ngrok.io"
})

export default api;