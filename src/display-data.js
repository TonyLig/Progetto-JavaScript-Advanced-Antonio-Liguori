// Display data
export function displayData(response) {
  const data = response.docs;
  const bookSection = document.getElementById("books-section");
  const modal = document.getElementById("modal");
  const modalParagraph = document.querySelector(".text-modal");

  // Loop through each book in the response data
  data.forEach((book) => {
    const findTitle = book.title;
    const bookKey = book.key;
    const findAuthor = book.author_name
      ? book.author_name[0]
      : "Author not found.";
    const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const coverImage = book.cover_i
      ? `${coverUrl}`
      : `https://picsum.photos/id/777/500/500`;

    // Create the elements for the book card
    const makeSlide = document.createElement("div");
    makeSlide.className = "slide";

    const makeCard = document.createElement("div");
    makeCard.className = "card";

    const makeImg = document.createElement("img");
    makeImg.className = "bk-cover";
    makeImg.src = coverImage;
    makeImg.alt = findTitle;

    const makeContent = document.createElement("div");
    makeContent.className = "content";

    const makeTitle = document.createElement("div");
    makeTitle.className = "title";
    makeTitle.textContent = findTitle;

    const makeAuthor = document.createElement("p");
    makeAuthor.className = "author";
    makeAuthor.textContent = findAuthor;

    const makeBtn = document.createElement("button");
    makeBtn.className = "modal-button";
    makeBtn.setAttribute("id", "open-button");
    makeBtn.textContent = "Learn More";

    // Add event listener to the "Learn More" button to fetch and show book description
    makeBtn.addEventListener("click", () => {
      const descriptionUrl = `https://openlibrary.org${bookKey}.json`;
      fetch(descriptionUrl)
        .then((response) => response.json())
        .then((data) => {
          let description = "No description available";
          if (data.description) {
            description =
              typeof data.description === "object"
                ? data.description.value || description
                : data.description || description;
          }
          modalParagraph.innerHTML = `${description}`;
          modal.showModal();
        })
        .catch((error) => {
          console.error(error.message);
          alert(`Sorry something goes wrong, try again: ${error.message}`);
        });
    });

    // Append elements to create the book card
    makeContent.appendChild(makeTitle);
    makeContent.appendChild(makeAuthor);
    makeContent.appendChild(makeBtn);

    makeCard.appendChild(makeImg);
    makeCard.appendChild(makeContent);

    makeSlide.appendChild(makeCard);
    bookSection.appendChild(makeSlide);
  });
}
