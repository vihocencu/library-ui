import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './books-list/book-service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksAddComponent } from './books-add/books-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavBarComponent,
    BooksAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
