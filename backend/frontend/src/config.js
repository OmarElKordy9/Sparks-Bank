import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:  "https://sparksbank--kordy.herokuapp.com/api/"
})