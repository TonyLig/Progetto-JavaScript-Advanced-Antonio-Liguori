import "./fullpage";
import "./style.css";
import { displayData } from "./display-data";

// Element selection
const searchInput = document.querySelector(".search-bar");
const btnSearch = document.querySelector(".btn-search");

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");

// Add Event
btnSearch.addEventListener("click", getInput);

closeModal.addEventListener("click", () => {
  modal.close();
});

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
