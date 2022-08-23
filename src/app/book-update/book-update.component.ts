import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent implements OnInit {
  isUpdated: Boolean = false;

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
  }

  ngOnInit(): void {
    this.service.getBookById(this.id).subscribe((data) => {
      this.book = data;
    });
  }

  closeAlert() {
    this.isUpdated = false;
  }

  updateBook() {
    this.service.updateBook(this.book);
    this.isUpdated = true;
  }
}
