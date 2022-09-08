import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {
  book: Book = new Book('', '', '', 0, 0);
  isSubmitted: Boolean = false;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    pages: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
    ]),
  });

  constructor(private service: BookService) {}

  ngOnInit(): void {}

  closeAlert() {
    this.isSubmitted = false;
  }
  createBook() {
    this.book.title = this.form.get('title')?.value;
    this.book.author = this.form.get('author')?.value;
    this.book.isbn_number = this.form.get('isbn')?.value;
    this.book.no_of_pages = Number(this.form.get('pages')?.value);
    this.book.price = Number(this.form.get('price')?.value);

    this.service.createBook(this.book);
    console.log(this.book.title, this.book.isbn_number);

    this.isSubmitted = true;
  }
}
