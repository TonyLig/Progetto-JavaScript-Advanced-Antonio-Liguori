// Display data
export function displayData(response) {
  const data = response.docs;

  // // Looping data
  data.forEach((booksArr) => {
    createCard(booksArr);
  });

  // Create card
  function createCard(book) {
    // Target data
    const modal = document.getElementById("modal");
    const modalParagraph = document.querySelector(".text-modal");
    const findTitle = book.title;
    const bookKey = book.key;
    const findAuthor = book.author_name
      ? book.author_name[0]
      : "Author not found.";
    const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const coverImage = book.cover_i
      ? `${coverUrl}`
      : `https://picsum.photos/id/777/500/500`;

    // Create card element
    const makeSlide = document.createElement("div");
    const makeCard = document.createElement("div");
    const makeImg = document.createElement("img");
    const makeContent = document.createElement("div");
    const makeTitle = document.createElement("div");
    const makeAuthor = document.createElement("p");
    const makeBtn = document.createElement("button");

    // Append card element
    const bookSection = document.getElementById("books-section");

    // Append slide container
    makeSlide.className = "slide";
    bookSection.appendChild(makeSlide);

    // Append card container div
    makeCard.className = "card";
    makeSlide.appendChild(makeCard);

    // Append Img
    makeImg.className = "bk-cover";
    makeImg.src = coverImage;
    makeImg.alt = findTitle;
    makeCard.appendChild(makeImg);

    // Append content container div
    makeContent.className = "content";
    makeCard.appendChild(makeContent);

    // Append title div
    makeTitle.className = "title";
    makeTitle.appendChild(document.createTextNode(findTitle));
    makeContent.appendChild(makeTitle);

    // Append author P
    makeAuthor.className = "author";
    makeAuthor.appendChild(document.createTextNode(findAuthor));
    makeContent.appendChild(makeAuthor);

    //Button open modal
    makeBtn.className = "modal-button";
    makeBtn.setAttribute("id", "open-button");
    makeBtn.appendChild(document.createTextNode("Learn More"));
    makeContent.appendChild(makeBtn);

    //Retrive book description
    makeBtn.addEventListener("click", () => {
      //Fetch API
      const descriptionUrl = `https://openlibrary.org${bookKey}.json`;
      fetch(descriptionUrl)
        .then((response) => response.json())
        .then((data) => {
          //Handling description
          let description = "No description available";

          if (data.description) {
            if (typeof data.description === "object") {
              description = data.description.value || description;
            } else if (typeof data.description === "string") {
              description = data.description || description;
            }
          }
          // Show description
          modalParagraph.innerHTML = `${description}`;
          modal.showModal();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}
