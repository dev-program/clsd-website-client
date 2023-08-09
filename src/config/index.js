import axios from "axios";


const isLocalhost = Boolean(
    window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

 export const API_URL = isLocalhost
    ? process.env.REACT_APP_LOCAL_API_URL || process.env.REACT_APP_LOCAL_API_URL_IP
    : process.env.REACT_APP_PROD_API_URL;

export const Axios = axios.create({
    withCredentials: true, 
     baseURL: API_URL,
});



{/* 
import axios from "axios";


const isLocalhost = Boolean(
    window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const API_URL = isLocalhost ? "http://localhost:3001/api/" : "https://lspu.edu.ph/lake-sustainable-development/api/";

export const Axios = axios.create({
    withCredentials: true, 
     baseURL: API_URL,
});
*/}


