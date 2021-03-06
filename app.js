const form = document.getElementById('form-control');
const userInput = document.getElementById('form-control--input');
const outputDiv = document.getElementById('output-flex');
const errorDiv = document.getElementById('error');
const loadingGif = document.getElementById('loading');
const API_URL = `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?search=`;
const FILM_URL = `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/films?title=`;
const filmBtn = document.getElementById('filmBtn');
const grid = document.getElementById('grid');

async function getData(e) {
  e.preventDefault();
  const inputQueryValue = userInput.value;
  console.log(inputQueryValue);
  if (inputQueryValue === '') {
    showError('Please enter a correct character');
  } else {
    showLoading();
    const REQ_URL = `${API_URL}${inputQueryValue}`; // base url + input value
    const res = await fetch(`${REQ_URL}`);
    const data = await res.json();
    console.log(data);
    hideLoading();
    showData(data);
  }
}

async function getFilmData(e) {
  e.preventDefault();
  showLoading();
  const MOVIE_URL = `${FILM_URL}`;
  const res = await fetch(`${MOVIE_URL}`);
  const data = await res.json();
  hideLoading();
  showFilmData(data);
  console.log(data);
}

// show loading gif
function showLoading() {
  loadingGif.classList.add('show');
}

// hide loading gif
function hideLoading() {
  loadingGif.classList.remove('show');
}

// show error msg
function showError(message) {
  errorDiv.innerHTML = message;
  setTimeout(() => {
    errorDiv.innerHTML = '';
  }, 2000);
}

function showFilmData(data) {
  let output = '';
  data.results.forEach((film) => {
    output += ` 
    <div class="wrapper">
      <h4 class="wrapper-title">${film.title}</h4>
      <ul class="wrapper-films">
      </ul>
      <br />
      <hr />
        <p class="open-crawl">${film.opening_crawl}</p> 
    </div>
    `;
  });
  outputDiv.innerHTML = '';
  grid.innerHTML = output;
}

// show data in DOM
function showData(data) {
  let output = '';
  data.results.forEach((character, i) => {
    output += `
    <div class="wrapper">
      <h4 class="wrapper-title">${character.name}</h4>
      <ul class="wrapper-films">
        <li>Height: ${character.height}cm</li>
        <li>Birth Year: ${character.birth_year}</li>
        <li>Hair Color: ${character.hair_color}</li>
      </ul>
      <br />
      <hr />
      </ul>
    </div>
    `;
  });
  grid.innerHTML = '';
  outputDiv.innerHTML = output;
}

// EVENT LISTENERS
form.addEventListener('submit', getData);
filmBtn.addEventListener('click', getFilmData);
