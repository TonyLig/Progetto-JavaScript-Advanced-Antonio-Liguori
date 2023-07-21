import "./fullpage";
import "./style.css";
import { displayData } from "./display-data";

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

// // Display data
// function displayData(response) {
//   const data = response.docs;

//   data.forEach((bookObj) => {
//     createCard(bookObj);
//   });

//   // Create card
//   function createCard(lalla) {
//     const bookSection = document.getElementById("books-section");

//     const makeSlide = document.createElement("div");
//     makeSlide.className = "slide";
//     bookSection.appendChild(makeSlide);

//     const makeCard = document.createElement("div");
//     makeCard.className = "card";
//     makeSlide.appendChild(makeCard);

//     const makeImg = document.createElement("img");
//     makeImg.className = "bk-cover";
//     makeCard.appendChild(makeImg);

//     const makeContent = document.createElement("div");
//     makeContent.className = "content";
//     makeCard.appendChild(makeContent);

//     const makeTitle = document.createElement("div");
//     makeTitle.className = "title";
//     makeContent.appendChild(makeTitle);

//     const makeAuthor = document.createElement("p");
//     makeAuthor.className = "author";
//     makeContent.appendChild(makeAuthor);

//     const makeModal = document.createElement("dialog");
//     makeModal.setAttribute("id", "book-modal");
//     makeContent.appendChild(makeModal);

//     const makeBtn = document.createElement("button");
//     makeBtn.className = "modal-button";
//     makeBtn.setAttribute("id", "modal-button");
//     makeContent.appendChild(makeBtn);
//   }
// }

// displayData();
