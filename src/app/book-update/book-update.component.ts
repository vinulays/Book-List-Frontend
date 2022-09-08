import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent implements OnInit {
  isUpdated: Boolean = false;

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

  book: any = {
    id: 0,
    title: '',
    author: '',
    isbn_number: '',
    no_of_pages: 0,
    price: 0,
  };

  id: string | null = '';
  constructor(private service: BookService, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    this.book.id = this.id;
  }

  ngOnInit(): void {
    this.service.getBookById(this.id).subscribe((data) => {
      this.form.get('title')?.setValue(data.title);
      this.form.get('author')?.setValue(data.author);
      this.form.get('isbn')?.setValue(data.isbn_number);
      this.form.get('pages')?.setValue(data.no_of_pages);
      this.form.get('price')?.setValue(data.price);
    });
  }

  closeAlert() {
    this.isUpdated = false;
  }

  updateBook() {
    this.book.title = this.form.get('title')?.value;
    this.book.author = this.form.get('author')?.value;
    this.book.isbn_number = this.form.get('isbn')?.value;
    this.book.no_of_pages = this.form.get('pages')?.value;
    this.book.price = this.form.get('price')?.value;

    console.log(this.book);

    this.service.updateBook(this.book);
    this.isUpdated = true;
  }
}
