import axios from "axios";

const axiosRequest = axios.create({
    baseURL: 'http://localhost/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
const laravelApi = () => {
    axiosRequest.interceptors.request.use((config) => {
            if (config.headers) {
                config.headers['Authorization'] = "Bearer "+localStorage.getItem('token') as string;
            }
            return config;
        }
        ,
        error => {
            return Promise.reject(error);
        }
    )
    return axiosRequest;
}

export default laravelApi;

