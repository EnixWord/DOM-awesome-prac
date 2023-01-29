const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStore = document.querySelector('#book-store');

let bookShelf = [];

function orderBooks(bookTitle, bookAuthor) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
}

class UI {
    static displayBook() {
        let book = bookShelf.map((items) => {
            return ` <p><span class='key'>Title:</span><span>${items.bookTitle}</span></p>
            <p><span class='key'>Author:</span><span>${items.bookAuthor}</span></p>`
        })
        bookStore.innerHTML =(book).join('');
    }

    static clearBook (){
        bookTitle.value = '';
        bookAuthor.value = '';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let addBook = new orderBooks(bookTitle.value, bookAuthor.value);
    bookShelf = [...bookShelf, addBook];
    UI.displayBook();
})

