function buscarPokemon() {
    const pokemonNombre = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return response.json();
        })
        .then(data => {
            const pokemonInfo = `
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Peso:</strong> ${data.weight}</p>
                <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}">`;
            document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
    }).catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('pokemonInfo').innerHTML = '<p>Pokémon no encontrado. Inténtalo de nuevo.</p>';
    });
}