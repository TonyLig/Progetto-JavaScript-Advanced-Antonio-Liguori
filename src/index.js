import "./fullpage";
import "./style.css";

// Element selection
const searchInput = document.querySelector(".search-bar");
const btnSearch = document.querySelector(".btn-search");

// Add Event
btnSearch.addEventListener("click", getInput);

// Function to get the input
function getInput(event) {
  event.preventDefault();
  getData(searchInput.value);
}

// Fetch API
function getData(search) {
  const apiUrl = `https://openlibrary.org/search.json?q=${search}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then(displayData);
}

function displayData(response) {
  const booksData = response.docs;
  console.log(booksData);
}

// Initial call
displayData();
