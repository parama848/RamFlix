const API_URL = "http://localhost:8080/api";

export const apiRequest = async (endpoint, options = {}) => {

    const token = localStorage.getItem("token");

    const headers = {
        ...options.headers
    };

    // Don't overwrite Content-Type for FormData
    if (!(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }

    // Add JWT if user is logged in
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,
            headers
        }
    );

    if (response.status === 204) {
        return null;
    }

    const data = await response.json();

    if (!response.ok) {

        if (response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }

        throw new Error(
            data.message || "Something went wrong"
        );
    }

    return data;
};