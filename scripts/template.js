// KOMMENTAR TEMPLATE

function getCommentsTemplateHTML(comment) {
    return `<p>
                <strong>${comment.name}:</strong>
                ${comment.comment}
            </p>`;
}


// BUCH TEMPLATE

function getContentTemplateHTML(book, commentsHTML, indexBooks) {
    let heartIcon = book.liked ? "❤️" : "♡";

    return `<div class="books-card">

                <h2>${book.name}</h2>

                <img src="${book.image}" alt="${book.name}">

                <p><strong>Autor:</strong> ${book.author}</p>

                <p><strong>Genre:</strong> ${book.genre} (${book.publishedYear})</p>

                <p><strong>Preis:</strong> ${book.price.toFixed(2)} €</p>

                <div class="likes-container" id="likes-${indexBooks}">

                    <span>${book.likes} Likes</span>

                    <button class="like-button" onclick="toggleLike(${indexBooks})">
                        ${heartIcon}
                    </button>

                </div>

                <div class="comments-section">

                    <h4>Kommentare:</h4>

                    <div class="comments-list" id="comments-${indexBooks}">
                        ${commentsHTML}
                    </div>

                </div>

                <div class="comment-input">

                    <input
                        type="text"
                        id="commentInput-${indexBooks}"
                        placeholder="Kommentar schreiben..."
                    >

                    <button onclick="addComment(${indexBooks})">
                        Senden
                    </button>

                </div>

            </div>`;
}
