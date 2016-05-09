function GetAllBooks() {
    var books = [{
            id: 1, title: 'Ulysses', author: 'James Joyce',
            availble: true, category: Category.Fiction
        }, {
            id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway',
            available: false, category: Category.Fiction
        }, {
            id: 3, title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou',
            available: true, category: Category.Poetry
        }, {
            id: 4, title: 'Moby Dick', author: 'Herman Melville',
            available: true, category: Category.Fiction
        }];
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
var x;
var idGenerator;
idGenerator = CreateCustomerID;
var myID = idGenerator('daniel', 10);
console.log(myID);
var fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach(function (val, idx, arr) { return console.log(++idx + ' - ' + val); });
console.log(GetBookById(2));
