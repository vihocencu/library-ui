import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book";
import { BookFactory } from "./book-factory";
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators'
import { retry, catchError, timeout  } from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable()
export class BookService {
    books:Book[];
    api = 'http://localhost:8080';
    http:HttpClient;

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    constructor(private httpClient: HttpClient) {this.http = httpClient}
    getAll(): Observable<Array<Book>> {
        return this.http
        .get(`${this.api}/books`)
        .pipe(
          retry(3),
          map((rawBooks:any) => rawBooks._embedded.books
            .map(rawBook => BookFactory.fromObject(rawBook)),
          )
        );
    }

    save(book : Book): Observable<Book> {
      console.log("In Service save");
      return this.http
      .post<Book>(`${this.api}/books`, JSON.stringify(book), this.httpOptions).pipe(timeout(12000)).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse) {
    console.log("ERROR!!!");
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}