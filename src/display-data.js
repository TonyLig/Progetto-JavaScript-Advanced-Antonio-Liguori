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
    const findTitle = book.title;
    const bookKey = book.key;
    const findAuthor = book.author_name
      ? book.author_name[0]
      : "Author not found.";
    const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const coverImage = book.cover_i
      ? `${coverUrl}`
      : `https://picsum.photos/id/777/500/500`;

    // Append Card
    const bookSection = document.getElementById("books-section");

    const makeSlide = document.createElement("div");
    makeSlide.className = "slide";
    bookSection.appendChild(makeSlide);

    const makeCard = document.createElement("div");
    makeCard.className = "card";
    makeSlide.appendChild(makeCard);

    const makeImg = document.createElement("img");
    makeImg.className = "bk-cover";
    makeImg.src = coverImage;
    makeImg.alt = findTitle;
    makeCard.appendChild(makeImg);

    const makeContent = document.createElement("div");
    makeContent.className = "content";
    makeCard.appendChild(makeContent);

    const makeTitle = document.createElement("div");
    makeTitle.className = "title";
    makeTitle.appendChild(document.createTextNode(findTitle));
    makeContent.appendChild(makeTitle);

    const makeAuthor = document.createElement("p");
    makeAuthor.className = "author";
    makeAuthor.appendChild(document.createTextNode(findAuthor));
    makeContent.appendChild(makeAuthor);

    const makeModal = document.createElement("dialog");
    makeModal.className = "book-modal";
    makeModal.setAttribute("id", "modal");
    makeContent.appendChild(makeModal);

    const makeBtn = document.createElement("button");
    makeBtn.className = "modal-button";
    makeBtn.setAttribute("id", "open-button");
    makeBtn.appendChild(document.createTextNode("Learn More"));
    makeContent.appendChild(makeBtn);

    console.log(book);
  }
}
