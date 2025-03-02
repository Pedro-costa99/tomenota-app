import axios from "axios";

const BASE_URL = "https://agile-releases.s3.us-east-1.amazonaws.com/tests";

export const fetchShowDetails = async () => {
    const response = await axios.get(`${BASE_URL}/tv-shows/SHOW123.json`);
    return response.data;
};

export const fetchEpisodes = async () => {
    const response = await axios.get(`${BASE_URL}/episodes/SHOW123.json`);
    return response.data;
};