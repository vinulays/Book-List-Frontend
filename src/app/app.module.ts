import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
