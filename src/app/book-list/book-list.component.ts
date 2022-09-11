import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { map, Observable, shareReplay, timer } from 'rxjs';
import { Book } from '../Book';
import { BookService } from '../book.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookList: any;
  searchTitle: string = '';
  noOfBooks!: number;
  averagePrice!: number;
  listLength!: number;

  time: Observable<Date> = timer(0, 1000).pipe(
    map((tick) => new Date()),
    shareReplay(1)
  );

  constructor(private service: BookService, private userService: UserService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  logOut() {
    sessionStorage.removeItem('token');
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
      this.noOfBooks = this.bookList.length;
      this.listLength = data.length;
      this.calculateAveragePrice();
    });
  }

  calculateAveragePrice() {
    var total: number = 0;
    for (let i = 0; i < this.bookList.length; i++) {
      total += this.bookList[i].price;
    }

    this.averagePrice = total / this.bookList.length;
  }

  searchBookByTitle() {
    this.service.getBookByTitle(this.searchTitle).subscribe((data) => {
      this.bookList = data;
      this.listLength = data.length;
    });
  }

  restoreList() {
    if (this.searchTitle == '') {
      this.getBooks();
    }
  }
}
