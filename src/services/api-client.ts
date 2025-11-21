import axios from "axios"


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000
})

// add a request interceptor that returns the config (typed)
apiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;