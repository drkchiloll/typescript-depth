import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import Encyclopedia from './encyclopedia';
import Shelf from './shelf';

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

let inventory: Array<Book> = [{
  id: 10, title: 'The C Programming Language', author: 'K & R',
  available: true, category: Category.Software
}, {
  id: 11, title: 'Code Complete', author: 'Steve McConnell',
  available: true, category: Category.Software
}, {
  id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.',
  available: true, category: Category.Software
}, {
  id: 13, title: 'Cool autoexec.bat Scripts', author: 'C. D.',
  available: true, category: Category.Software
}];

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

let magazines: Array<Magazine> = [{
  title: 'Programming Lang Monthly', publisher: 'Code Mags'
}, {
  title: 'Literary Fiction Quarterly', publisher: 'College Press'
}, {
  title: 'Five Points', publisher: 'GSU'
}];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(firstMagazine);

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

//
// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// console.log(purgedBooks);
//
// let purgedNums: Array<number> = Purge<number>([1,2,3,4,5]);
// console.log(purgedNums);

// let fee = CalcFee(5);

// Class Expressions
// let Newspaper = class extends ReferenceItem {
//   printCitation(): void {
//     console.log(`Newspaper: ${this.title}`);
//   }
// }
//
// let myPaper = new Newspaper('The Gazette', 2016);
// myPaper.printCitation();

//Another Class Expression
// class Novel extends class { title: string } {
//   mainCharacter: string;
// }
//
// let favoriteNovel = new Novel();
// favoriteNovel.

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1980, 10);
// refBook.printItem();
// refBook.printCitation();

// let ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2012);
// ref.title = 'Facts and Figures';
// ref.year = 2016;
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');
//Duck Typing (didn't define this as a "Book")
// let myBook: Book = {
//   id: 5,
//   title: 'Pride and Prejudice',
//   author: 'Jane Austen',
//   available: true,
//   category: Category.Fiction,
//   pages: 250,
//   markDamaged: (reason: string): void => console.log('Damaged: ' + reason)
// };
//
// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('coffee stains');

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
