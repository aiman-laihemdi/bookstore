let books = [
    {
      "name": "Mein erstes Jahr",
      "image": "./assets/img/1.jpeg",
      "author": "Denise Scialabba",
      "likes": 1250,
      "liked": true,
      "price": 34.99,
      "publishedYear": 2025,
      "genre": "Erinnerungsbuch",
      "comments": [
    {
        "name": "MamaLena",
        "comment": "Ein wunderschönes Erinnerungsbuch! Ich liebe es, die ersten besonderen Momente meines Kindes festzuhalten."
    },
    {
        "name": "Sophie92",
        "comment": "Sehr liebevoll gestaltet. Eine tolle Erinnerung, die man auch noch Jahre später gerne anschaut."
    },
    {
        "name": "Familienglück",
        "comment": "Perfekt für frischgebackene Eltern. Es macht unglaublich viel Spaß, die Seiten auszufüllen."
    },
    {
        "name": "AnnaK",
        "comment": "Ein tolles Geschenk zur Geburt! Die Gestaltung ist wunderschön und die Ideen sind sehr persönlich."
    },
    {
        "name": "Miriam",
        "comment": "Ich bin begeistert! Endlich ein Buch, in dem ich alle wichtigen Meilensteine meines Babys sammeln kann."
    },
    {
        "name": "LittleMoments",
        "comment": "Eine wunderschöne Möglichkeit, die Erinnerungen an das erste Lebensjahr für immer zu bewahren."
    }
]
    },
    {
      "name": "Mein erstes Jahr",
      "image": "./assets/img/2.jpeg",
      "author": "Denise Scialabba",
      "likes": 980,
      "liked": false,
      "price": 34.99,
      "publishedYear": 2025,
      "genre": "Erinnerungsbuch",
      "comments": []
    },
    {
      "name": "Die geheime Fabrik der Emotionen",
      "image": "./assets/img/3.jpeg",
      "author": "Denise Scialabba",
      "likes": 1800,
      "liked": true,
      "price": 26.99,
      "publishedYear": 2025,
      "genre": "Kinderbuch",
      "comments": [
        {
            "name": "Leserherz",
            "comment": "Ein wundervolles Buch, das Kindern auf spielerische Weise die Welt der Gefühle näherbringt."
        },
        {
            "name": "MamaMarie",
            "comment": "Sehr liebevoll und kreativ geschrieben. Eine tolle Unterstützung, um mit Kindern über Emotionen zu sprechen."
        },
        {
            "name": "Bücherwurm23",
            "comment": "Eine schöne Geschichte mit einer wichtigen Botschaft. Mein Kind hört begeistert zu!"
        }
      ]
    }
  ];
    

  //function

  let savedBooks = localStorage.getItem("books");

    if (savedBooks) {
    books = JSON.parse(savedBooks);
    }function renderBooks(){
    let containerBooksRef = document.getElementById('containerBookstore');
        containerBooksRef.innerHTML = "";

    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        let book = books[indexBooks];

        let commentsHTML = '';
        for (let indexBooksComments = 0; indexBooksComments < book.comments.length; indexBooksComments++) {
            let booksCommentsRef = book.comments[indexBooksComments];
            commentsHTML += getCommentsTemplateHTML(booksCommentsRef);
        }

            
    if (book.comments.length === 0){
        commentsHTML = '<p><em>Noch keine Kommentare vorhanden.</em></p>';
    }

    containerBooksRef.innerHTML += getContentTemplateHTML(book, commentsHTML, indexBooks);

    }
}

function getCommentsTemplateHTML(booksCommentsRef){
    return `<p>
                <strong>${booksCommentsRef.name}:</strong>
                ${booksCommentsRef.comment}
            </p>`
}

function getContentTemplateHTML(book, commentsHTML, indexBooks) {
    let heartIcon = book.liked ? '❤️' : '♡';

    return `<div class="books-card">
                <h2>${book.name}</h2>
                <img src="${book.image}" alt="${book.name}">
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre} (${book.publishedYear})</p>
                <p><strong>Preis:</strong> ${book.price.toFixed(2)} €</p>

                <div class="likes-container" id="likes-${indexBooks}">
                    <span> ${book.likes} Likes</span>

                    <button class="like-button" onclick="toggleLike(${indexBooks})">
                        ${heartIcon}
                    </button>
                </div>

                <div class="comments-section">
                    <h4>Kommentare:</h4>

                    <div class="comments-list">
                        ${commentsHTML}
                    </div>
                </div>

                <div class="comment-input">
                  <input type="text" id="commentInput-${indexBooks}" placeholder="Kommentar schreiben...">
                  <button onclick="addComment(${indexBooks})">Senden</button>
                </div>
            </div>`;
            
}

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

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
            ${books[indexBooks].liked ? '❤️' : '♡'}
        </button>
    `;
}

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
    renderBooks();
}