import axios from "axios";

export const configUseAxios = () => {
    axios.defaults.baseURL = "https://hoadv-nodejs.vercel.app";
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




