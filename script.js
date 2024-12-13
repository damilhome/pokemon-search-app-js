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

const updateTypes = (data) => {
    types.innerHTML = '';
    data.types.forEach(typeObj => {
        types.innerHTML += `
            <p class="type ${typeObj.type.name}">${typeObj.type.name.toUpperCase()}</p>
        `;
    });
};

const showPokemonInfo = data => {
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    pokemonImg.setAttribute('src', data.sprites.front_default)
    pokemonImg.setAttribute('alt', `${data.name} image.`)
    updateTypes(data);
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
};

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
        showPokemonInfo(data)
    }

})