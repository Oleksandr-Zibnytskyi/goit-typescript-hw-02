import axios from "axios";
import { Images, Params } from "../types";

const API_KEY = 'ITsSPcSKgTRDulMl6wo-JLHsYpFKItindBXoDSrXasU';
const BASE_URL = 'https://api.unsplash.com';

axios.defaults.baseURL = BASE_URL;

export const getImages = async (query: string, page: number): Promise<Images[]> => {
  const params: Params = {
    client_id: API_KEY,
    query,
    page,
    per_page: 12,
    orientation: 'landscape',
  };
  const res = await axios.get<{ results: Images[] }>("/search/photos", { params });
  return res.data.results;
};



