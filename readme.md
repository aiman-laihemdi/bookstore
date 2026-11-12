function renderBooks() {
    let containerBooksRef = document.getElementById('containerBookstore');
    containerBooksRef.innerHTML = ''; // Leert den Container vor dem Neu-Rendern

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        
        // Kommentare für das aktuelle Buch sammeln
        let commentsHTML = '';
        for (let j = 0; j < book.comments.length; j++) {
            let commentObj = book.comments[j];
            commentsHTML += `
                <p><strong>${commentObj.name}:</strong> ${commentObj.comment}</p>
            `;
        }

        // Fallback, falls noch keine Kommentare vorhanden sind
        if (book.comments.length === 0) {
            commentsHTML = '<p><em>Noch keine Kommentare vorhanden.</em></p>';
        }

        // Herz-Icon abhängig von "liked" (true/false) festlegen
        let heartIcon = book.liked ? '❤️' : '🤍';

        // HTML für das Buch-Objekt zusammenbauen und einfügen
        containerBooksRef.innerHTML += `
            <div class="book-card">
                <h2>${book.name}</h2>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre} (${book.publishedYear})</p>
                <p><strong>Preis:</strong> ${book.price.toFixed(2)} €</p>
                <p><strong>Likes:</strong> ${book.likes} ${heartIcon}</p>
                
                <div class="comments-section">
                    <h4>Kommentare:</h4>
                    ${commentsHTML}
                </div>
                <hr>
            </div>
        `;
    }