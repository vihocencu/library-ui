import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  tile:string;
  description:string;
  picture:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Book {
  tile:string;
  description:string;
  author:string;
  picture:any;
};
