const form = document.getElementById('form-control');
const userInput = document.getElementById('form-control--input');
const outputDiv = document.getElementById('output-flex');
const errorDiv = document.getElementById('error');
const loadingGif = document.getElementById('loading');
const API_URL = `https://swapi.dev/api/people/?search=`;

async function getData(e) {
  e.preventDefault();
  const inputQueryValue = userInput.value;
  console.log(inputQueryValue);
  if (inputQueryValue === '') {
    showError('Please enter a correct character');
  } else {
    showLoading();
    const REQ_URL = `${API_URL}${inputQueryValue}`;
    const res = await fetch(`${REQ_URL}`);
    const data = await res.json();
    console.log(data);
    hideLoading();
  }
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

// show data in DOM
function showData() {}

// EVENT LISTENERS
form.addEventListener('submit', getData);
