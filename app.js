const form = document.getElementById('form-control'); 
const userInput = document.getElementById('form-control--input');
const outputDiv = document.getElementById('output-flex');
const errorDiv = document.getElementById('error');
const API_URL = `https://swapi.dev/api/people/?search=${character}`;








// EVENT LISTENERS 
form.addEventListener('submit', getData);