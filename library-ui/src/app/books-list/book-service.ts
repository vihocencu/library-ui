import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book";
import { BookFactory } from "./book-factory";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class BookService {
    books:Book[];
    api = 'http://localhost:8080';
    http:HttpClient;

    constructor(private httpClient: HttpClient) {this.http = httpClient}
    getAll(): Observable<Array<Book>> {
        console.log("httpget");
        return this.http
        .get(`${this.api}/books`)
        .pipe(
          retry(3),
          map((rawBooks:any) => rawBooks._embedded.books
            .map(rawBook => BookFactory.fromObject(rawBook)),
          )
        );
    }
}