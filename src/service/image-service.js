import axios from 'axios';

const API_KEY = 'IcYqF91qXfw3GacoC5Tom0kpp1bro9uhIQO68WjggM2X0v0Ysp2R4id9';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  return await axios.get(`search?query=${query}&page=${page}`)
};
