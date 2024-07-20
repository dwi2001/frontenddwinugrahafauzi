// httpClient.js
import axios from 'axios';

const BASE_URL = 'http://202.157.176.100:3000';

export const fetchNegaras = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/negaras`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchPelabuhansByNegara = async (id_negara) => {
    try {
        const response = await axios.get(`${BASE_URL}/pelabuhans?filter={"where":{"id_negara":${id_negara}}}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchBarangsByPelabuhan = async (id_pelabuhan) => {
    try {
        const response = await axios.get(`${BASE_URL}/barangs?filter={"where":{"id_pelabuhan":${id_pelabuhan}}}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
