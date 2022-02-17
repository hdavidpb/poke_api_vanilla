const pokemonDataContainer = document.getElementById("list_data_container");

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
     <h1 class="list_item" id=${element.url} >${element.name}</h1>
     `;
  }
  pokemonDataContainer.innerHTML = pokemonesContainer;

  const listItem = document.querySelectorAll(".list_item");
  console.log(listItem);
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("HOLA ===> ", item);
    });
  });
};
