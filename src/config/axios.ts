import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const configUseAxios = () => {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.timeout = 15000;
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

export const configureAxiosResponse = () => {
    axios.interceptors.response.use((response) => {

        return response;
    }, (error) => {
        if (typeof error === "string") {
            // handle string error
            toast.error(error);
            return;
        } else if (error instanceof AxiosError) {
            // handle Error object
            if (error.response?.data.messages) {
                const { messages } = error.response.data;

                if (typeof (messages) === "object") {
                    messages.map((message: string) => toast.error(message));
                    return;
                } else {
                    toast.error(error.response.data.message);
                    return;
                }

            }
            else if (error.status === 500) {
                toast.error("Server error");
                return;
            }
        } else {
            // handle other types of errors
            toast.error("Server error: " + error);
            return;
        }

        return Promise.reject(error);
    })
}




