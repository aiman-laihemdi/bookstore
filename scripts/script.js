let books = [
    {
      "name": "Die geheime Fabrik der Emotionen",
      "image": "../assets/img/1.jpeg",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "image": "../assets/img/2.jpeg",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "image": "../assets/img/3.jpeg",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ];
    

  //function

    function renderBooks(){
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

                <p><strong>Likes:</strong> ${book.likes}</p>

                <button onclick="toggleLike(${indexBooks})">
                    ${heartIcon}
                </button>

                <div class="comments-section">
                    <h4>Kommentare:</h4>
                    ${commentsHTML}
                </div>
                <hr>
            </div>`;
}

function toggleLike(indexBooks) {
    if (books[indexBooks].liked) {
        books[indexBooks].likes--;
        books[indexBooks].liked = false;
    } else {
        books[indexBooks].likes++;
        books[indexBooks].liked = true;
    }

    renderBooks();
}