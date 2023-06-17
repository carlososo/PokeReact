import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';


export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export const getPokemons = async (limit = 30, offset = 0) => {
  try {
    const { data } = await axiosInstance.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return {data };
  } catch (error) {
    console.error(error);
  }
}


export const getMorePokemons = async (url) => {
  try {
    const { data, next } = await axios.get(url);
    return {data, next};
  } catch (error) {
    console.error(error);
  }
}

export const getSelectedPokemon = async (url) => {
  try{
    const { data } = await axiosInstance.get(url);
    return { data };
  }catch (error) {
    console.error(error);
  }

}