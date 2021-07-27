export class Book {
    title:string;
    description:string;
    author:string;
    picture:string;

    constructor(title:string, author:string, description:string, picture:string) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.picture = picture;
    }
    getPic():string {
        console.log('data:image/gif;base64,'+this.picture);
        return 'data:image/gif;base64,'+this.picture;
    }
  };