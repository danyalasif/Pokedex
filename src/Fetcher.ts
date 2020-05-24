const BASE_URL = `https://pokeapi.co/api/v2`;

export const getPokemonById = (id: string) =>
  fetch(`${BASE_URL}/pokemon/${id}`).then(r => r.json());
// export const getPokemonById = (url) => fetch(url).then(r => r.json());
// export const getPokemonById = (url) => fetch(url).then(r => r.json());
// export const getPokemonById = (url) => fetch(url).then(r => r.json());
