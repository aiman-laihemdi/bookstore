// INITIALISIERUNG

function init() {
    loadBooks();
    renderBooks();
}


// LOCAL STORAGE

function loadBooks() {
    let savedBooks = localStorage.getItem("books");

    if (savedBooks) {
        books = JSON.parse(savedBooks);
    }
}

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}


// BÜCHER RENDERN

function renderBooks() {
    let containerBooksRef = document.getElementById("containerBookstore");

    containerBooksRef.innerHTML = "";

    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        let book = books[indexBooks];

        let commentsHTML = "";

        for (let indexComments = 0; indexComments < book.comments.length; indexComments++) {
            let comment = book.comments[indexComments];

            commentsHTML += getCommentsTemplateHTML(comment);
        }

        if (book.comments.length === 0) {
            commentsHTML = '<p><em>Noch keine Kommentare vorhanden.</em></p>';
        }

        containerBooksRef.innerHTML += getContentTemplateHTML(book, commentsHTML, indexBooks);
    }
}


// LIKE FUNKTION

function toggleLike(indexBooks) {

    if (books[indexBooks].liked) {
        books[indexBooks].likes--;
        books[indexBooks].liked = false;

    } else {
        books[indexBooks].likes++;
        books[indexBooks].liked = true;
    }

    saveBooks();

    let likesContainerRef = document.getElementById(`likes-${indexBooks}`);

    likesContainerRef.innerHTML = `
        <span>${books[indexBooks].likes} Likes</span>

        <button class="like-button" onclick="toggleLike(${indexBooks})">
            ${books[indexBooks].liked ? "❤️" : "♡"}
        </button>
    `;
}


// KOMMENTAR FUNKTION

function addComment(indexBooks) {

    let inputRef = document.getElementById(`commentInput-${indexBooks}`);

    let commentText = inputRef.value;

    if (commentText.trim() === "") {
        return;
    }

    books[indexBooks].comments.unshift({
        name: "Gast",
        comment: commentText
    });

    saveBooks();

    let commentsContainerRef = document.getElementById(`comments-${indexBooks}`);

    let commentsHTML = "";

    for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {
        let comment = books[indexBooks].comments[indexComments];

        commentsHTML += getCommentsTemplateHTML(comment);
    }

    commentsContainerRef.innerHTML = commentsHTML;

    inputRef.value = "";
}

