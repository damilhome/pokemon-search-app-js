const pokeApiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const pokemonImg = document.getElementById('pokemon-img');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

searchButton.addEventListener('click', async e => {
    e.preventDefault();
    inputValue = searchInput.value;

    searchInput.setCustomValidity('');
    if (!inputValue) { 
        searchInput.setCustomValidity('Preencha este campo.'); 
        searchInput.reportValidity();
        return
    }

    const pokemonUrl = `${pokeApiUrl}${inputValue}`
    const data = await fetchData(pokemonUrl);
    if(!data) {
        alert('Pokémon not found');
    } else {

    }

})