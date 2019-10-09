// Rick and Morty API: https://rickandmortyapi.com/

// Function that fetches our characters based on the name from the input field
function fetchCharacters() {
  const inputValue = document.getElementById('character-input').value;

  fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatCharacters(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatCharacters(charactersData) {
  //console.log(charactersData);
  const charDiv = document.getElementById('characters');
  console.log(charDiv);
  charDiv.innerHTML = '';

  charactersData.forEach(character => {
    charDiv.innerHTML +=
      `<div><img src="${character.image}"><h2>${character.name}</h2></div>`;
  });
}