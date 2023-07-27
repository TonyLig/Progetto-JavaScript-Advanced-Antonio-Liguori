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

// Function to get the input
function getInput(event) {
  event.preventDefault();
  getData(searchInput.value)
    .then(displayData)
    .then(() => fullPageApi.moveTo(2))
    .catch((error) => {
      console.log(error);
    });
}

// Fetch API
function getData(search) {
  const apiUrl = `https://openlibrary.org/search.json?q=${search}`;
  return fetch(apiUrl).then((response) => response.json());
}
