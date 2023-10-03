import axios from "axios";

export const baseURL = "https://api.themoviedb.org/3";

export const imageBaseURL = "https://image.tmdb.org/t/p/original/";

type ConfigObj = {
  baseURL: string;
};

const axioConfig: ConfigObj = {
  baseURL: baseURL,
};

const apiCalls = axios.create(axioConfig);

export default apiCalls;
