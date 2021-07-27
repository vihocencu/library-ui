import { Component, OnInit } from '@angular/core';
import { Book } from '../books-list/book';
import {BookService } from '../books-list/book-service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  name:string;
  description:string;
  file:string;
  author:string;
  b:Book;
  obs : Observable<Book>;
  constructor(private bs: BookService) {        
   }

  ngOnInit(): void {
  }

  save() {
    this.b = new Book(this.name, this.author, this.description, this.file);
    console.log("in addBook save()");
    this.obs = this.bs.save( this.b);
    this.obs.subscribe(resp => {
      console.log("After adding");
    });
  }
  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let str = reader.result.toString();
      let index = str.indexOf('base64')+7;
      this.file = str.substring(index);
      console.log(str);
    };
}
}