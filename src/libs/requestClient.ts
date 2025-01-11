import axios from 'axios';

let API_SERVER = import.meta.env.VITE_API_URL
if (!API_SERVER) {
    API_SERVER = "http://localhost:3000"
}


const baseAxiosClient = axios.create({
    baseURL: `${API_SERVER}`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});


export { baseAxiosClient }