import { Category } from './enums';
import { Book, DamageLogger } from './interfaces';

function GetAllBooks(): Book[] {
  let books = [{
    id: 1, title: 'Ulysses', author: 'James Joyce',
    available: true, category: Category.Fiction
  }, {
    id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway',
    available: false, category: Category.Fiction
  },{
    id: 3, title: 'I know Why the Caged Bird Sings', author: 'Maya Angelou',
    available: true, category: Category.Poetry
  }, {
    id: 4, title: 'Moby Dick', author: 'Herman Melville',
    available: true, category: Category.Fiction
  }];
  return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';
  for(let currentBook of books) {
    if(currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Totle Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

// Default Parameters TOO
function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
  console.log('Getting books in category: ' + Category[categoryFilter]);
  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];
  for(let currentBook of allBooks) {
    if(currentBook.category === categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for(let title of titles) {
    console.log(title);
  }
}

//Arrow Function Demo
function GetBookById(id: number): Book {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

//Optional Parameters
function CreateCustomer(name: string, age?: number, city?: string) {
  console.log('Creating customer ' + name);

  if(age) console.log('Age: ' + age);
  if(city) console.log('City: ' + city);
}

// REST Parameters
function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log('Checking out books for ' + customer);
  let booksCheckedOut: string[] = [];
  for(let id of bookIDs) {
    let book = GetBookById(id);
    if(book.available) booksCheckedOut.push(book.title);
  }
  return booksCheckedOut;
}

function booksFilter(books, prop, bookProp): string[] {
  return books.reduce((arr, book) => {
    if(book[prop] === bookProp) arr.push(book.title);
    return arr;
  }, []);
}
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProp: any): string[] {
  const allBooks = GetAllBooks();
  let foundTitles: string[];

  if(typeof bookProp=='string') foundTitles = booksFilter(allBooks,'author',bookProp);
  else if(typeof bookProp=='boolean') foundTitles = booksFilter(allBooks,'available',bookProp);
  return foundTitles;
}

function PrintBook(book: Book): void {
  console.log(book.title + ' by ' + book.author);
}
//***********************************************************

//Duck Typing (didn't define this as a "Book")
let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string): void => console.log('Damaged: ' + reason)
};

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');

// PrintBook(myBook);
// myBook.markDamaged('Torn Pages');

// let checkedOutBooks = GetTitles('Herman Melville');
// checkedOutBooks.forEach(title => console.log(title));


// let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));

// CreateCustomer('Michelle');
// CreateCustomer('Leigh', 12);

// let x: number;
// x = 5;
// Function TYPE Variables
// let idGenerator: (chars: string, nums: number) => string;
// Set FN Type Variable to the FN
// idGenerator = CreateCustomerID;
// Call the Function that RETURNS String
// let myID: string = idGenerator('daniel', 10);
// console.log(myID);

// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//Arrow Function Demo
// fictionBooks.forEach((val, idx, arr) => console.log(++idx+ ' - ' +val));
// console.log(GetBookById(2));
