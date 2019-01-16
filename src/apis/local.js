import axios from "axios";

//creates instance of axios
const LocalApi = axios.create({
    baseURL: "http://localhost:3000"
});

export default LocalApi;