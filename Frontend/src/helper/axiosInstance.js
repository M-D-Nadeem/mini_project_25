import axios from "axios";

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL="https://mini-project-25-zomg.onrender.com/app"
axiosInstance.defaults.withCredentials=true

export default axiosInstance