const isLocalhost = Boolean(
    window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const API_URL = isLocalhost ? "http://localhost:5001/api/" : "https://lspu.edu.ph/lake-sustainable-development/api/";

// export const Axios = axios.create({
//     withCredentials: true, 
//     baseURL: API_URL,
// });

