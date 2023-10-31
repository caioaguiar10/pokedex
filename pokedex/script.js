// Função para buscar e exibir os dados do Pokémon
async function fetchPokemonData(pokemonName) {
    try {
        // Fazer uma solicitação à API com o nome do Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Erro na solicitação da API');
        }
 
        const data = await response.json();
 
        // Elementos onde os dados serão exibidos
        const pokemonNameElement = document.getElementById('pokemon-name');
        const pokemonTypeElement = document.getElementById('pokemon-type');
 
        // Preencher os elementos com os dados do Pokémon
        pokemonNameElement.textContent =  data.name;
        pokemonTypeElement.textContent =  data.types[0].type.name;
 
        // Atualizar a imagem `image 6` com a imagem do Pokémon
        const dexImage = document.querySelector('.dex');
        dexImage.src = data.sprites.front_default;
    } catch (error) {
        console.error(error);
    }
}
 
// Adicionar um evento de submissão ao formulário
const searchForm = document.querySelector('.search-bar');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar a recarga da página
    const searchInput = document.getElementById('search-input').value.toLowerCase();
 
    // Agora, a pesquisa é baseada nos nomes da API e não na URL
    fetchPokemonData(searchInput);
});
 