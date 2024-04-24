async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    const data = await response.json();
    return data;
  } catch {
    console.error("Error with network: ", error);
  }
}

async function process() {
  const data = await fetchData();
  console.log(data);
}

process();
