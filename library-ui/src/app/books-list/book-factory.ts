import {Book} from './book'
export class BookFactory {

    static fromObject(rawObject:any) {
        return new Book(
            rawObject.title,
            rawObject.author,
            rawObject.description,
            rawObject.picture
        );
    }
}