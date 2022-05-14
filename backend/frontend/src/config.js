import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:  "https://kordy-sparksbank.herokuapp.com/api"
})