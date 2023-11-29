import axios from "axios";

export const configUseAxios = () => {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },

        (error) => {
            return Promise.reject(error);
        }
    );
}




