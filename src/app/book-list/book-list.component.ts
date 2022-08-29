import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookList: any;
  searchTitle: string = '';
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe((data) => {
      console.log('Delete success');
      this.getBooks();
    });
  }

  getBooks() {
    this.service.getBooks().subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  }

  searchBookByTitle() {
    this.service.getBookByTitle(this.searchTitle).subscribe((data) => {
      this.bookList = data;
    });
  }
}
