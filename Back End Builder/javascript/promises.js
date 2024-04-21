// promises

const myPromise1 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

myPromise1
  .then(() => console.log("Success"))
  .catch(() => console.error("Something went wrong"));

// fetch with promises
const myPromise2 = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(() => console.error(err));

//

//fetch with await - pokemonAPI
const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchPokemon(3);
