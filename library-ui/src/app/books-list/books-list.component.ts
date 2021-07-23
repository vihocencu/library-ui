import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { BookService } from './book-service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:Book[];
  
  constructor(private bs: BookService) {        
   }

  ngOnInit(): void {
    console.log("booklist");
    this.bs.getAll().subscribe(res => this.books = res);  }

}