import axios from "axios";

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL="http://localhost:9000/app"
axiosInstance.defaults.withCredentials=true

export default axiosInstance