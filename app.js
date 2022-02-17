const pokemonDataContainer = document.getElementById("list_data_container");
const cardContainer = document.getElementsByClassName("card-container");
const getAllPokemons = async () => {
  try {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
    );

    const response = await data.json();
    console.log(response);
    printDataPokemonsName(response.results);
  } catch (error) {
    console.log(error);
  }
};

getAllPokemons();

const handleGetId = (element) => {
  console.log(element);
};

const printDataPokemonsName = async (data) => {
  let pokemonesContainer = "";

  for (const element of data) {
    pokemonesContainer += `
     <h1 class="list_item" id=${element.name} >${element.name}</h1>
     `;
  }
  pokemonDataContainer.innerHTML = pokemonesContainer;

  if (pokemonDataContainer !== "") {
    const listItem = document.querySelectorAll(".list_item");

    listItem.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("HOLA ===> ", item.id);
        getPokemonDetails(item.id);
      });
    });
  }
};

const getPokemonDetails = async (pokeName) => {
  console.log("AHHHHH");
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const response = await data.json();
    console.log(response);
    console.log(response.sprites.other.dream_world.front_default);
    printCardContainer(response.sprites.other.dream_world.front_default);
  } catch (error) {
    console.log(error);
  }
};

const printCardContainer = (data) => {
  cardContainer[0].style.background = `url(${data}) no-repeat center center/cover`;
  console.log(cardContainer);
};

//Commit
