import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  createBook(book: Book) {
    this.http
      .post('http://localhost:8000/list/create', book)
      .subscribe((data) => {
        console.log('Add success');
      });
  }

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:8000/list');
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete('http://localhost:8000/list/delete/' + id);
  }

  getBookById(id: number | string | null): Observable<any> {
    return this.http.get('http://localhost:8000/list/update/' + id);
  }

  updateBook(book: Book) {
    this.http
      .put('http://localhost:8000/list/update', book)
      .subscribe((data) => {
        console.log('Update success');
      });
  }
}
