import fullPageApi from "./fullpage";
import "./style.css";
import { displayData } from "./display-data";
console.log(fullPageApi);
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

// Function to get the input and manage the flow of the APP
function getInput(event) {
  event.preventDefault();
  getData(searchInput.value)
    .then(displayData)
    .then(showLoader)
    .catch((error) => {
      console.log(error);
    });
}

// Fetch API
function getData(search) {
  const apiUrl = `https://openlibrary.org/search.json?limit=10&q=${search}`;
  return fetch(apiUrl).then((response) => response.json());
}

// Show the loader and afterwards put the focus on the books
function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";
    fullPageApi.moveTo(2);
  }, 5000);
}
