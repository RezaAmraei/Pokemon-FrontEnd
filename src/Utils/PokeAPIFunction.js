import axios from "axios";

const PokeAPIFunction = async (searchFor, data) => {
  try {
    const resultFromPokeApi = await axios.get(
      `https://pokeapi.co/api/v2/${searchFor}/${data}`
    );
    return resultFromPokeApi.data;
  } catch (e) {
    return false;
  }
};

export default PokeAPIFunction;
