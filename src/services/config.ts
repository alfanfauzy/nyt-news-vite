import axios from "axios";

// Create axios instance with base configuration
export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Add auth token if available
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        console.log("Making request to:", config.url);
        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        console.log("Response received:", response.status);
        return response;
    },
    (error) => {
        console.error("Response error:", error);

        // Handle different error status codes
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized
                    console.error("Unauthorized access");
                    break;
                case 403:
                    // Handle forbidden
                    console.error("Forbidden access");
                    break;
                case 404:
                    // Handle not found
                    console.error("Resource not found");
                    break;
                case 500:
                    // Handle server error
                    console.error("Server error");
                    break;
                default:
                    console.error("API error:", error.response.data);
            }
        } else if (error.request) {
            // Network error
            console.error("Network error:", error.request);
        } else {
            // Other error
            console.error("Error:", error.message);
        }

        return Promise.reject(error);
    }
);
