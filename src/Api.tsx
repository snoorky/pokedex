import axios from "axios"

export const APIPokemon = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`
})