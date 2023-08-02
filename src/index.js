import fullPageApi from "./fullpage.js";
import "./style.css";
import { displayData } from "./display-data.js";

// Element selection
const searchInput = document.querySelector(".search-bar");
const btnSearch = document.querySelector(".btn-search");
const cleanSection = document.getElementById("books-section");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");
const loader = document.getElementById("loader");

// Add Event
btnSearch.addEventListener("click", getInput);
closeModal.addEventListener("click", () => {
  modal.close();
});

// Function to get the input and manage the flow of the APP
function getInput(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    alert("Please enter a search term.");
    return;
  }

  cleanBookSection();
  getData(searchTerm).then((data) => {
    if (data.docs.length === 0) {
      alert("No data found for the given search term.");
    } else {
      displayData(data);
      showLoader();
    }
  });
}

// Fetch API
async function getData(search) {
  const apiUrl = `https://openlibrary.org/search.json?limit=10&q=${search}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch data from the server.");
  }
  return response.json();
}

// Show the loader and afterwards put the focus on the books section
function showLoader() {
  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";
    fullPageApi.moveTo(2);
    searchInput.value = "";
  }, 3000);
}

// Clean up book section for next
function cleanBookSection() {
  cleanSection.innerHTML = "";
}
