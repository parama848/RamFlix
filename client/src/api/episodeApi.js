const BACKEND_URL="http://localhost:8080/api";

export const getAllEpisodes = async () => {

    const response = await fetch(
        `${BACKEND_URL}/episodes`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch episodes");
    }

    const result = await response.json();

    return result.data;
};