function GetAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', availble: true },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
        { title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
        { title: 'Moby Dick', author: 'Herman Melville', available: true }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Totle Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
