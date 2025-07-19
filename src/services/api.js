import axios from "axios";

const baseURL = "https://example.com/api/v1";
const headers = {
    Accept: "application/json",
    Authorization: "Basic XXX"
};

export const getTest = async () => {
    try {
        const response = await axios.get(`${baseURL}/test`, {
            headers
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os envios", error);
        throw error;
    }
};
