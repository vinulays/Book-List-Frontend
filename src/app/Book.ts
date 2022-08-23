export class Book {
  title: string | null | undefined;
  author: string | null | undefined;
  isbn_number: string | null | undefined;
  no_of_pages: number | null | undefined;
  price: number | null | undefined;

  constructor(
    title: string,
    author: string,
    isbn_number: string,
    no_of_pages: number,
    price: number
  ) {
    this.title = title;
    this.author = author;
    this.isbn_number = isbn_number;
    this.no_of_pages = no_of_pages;
    this.price = price;
  }
}
