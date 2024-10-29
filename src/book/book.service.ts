import { Injectable } from "@nestjs/common";
import { BookDto } from "./data/book.dto";
import { v4 as uuidv4 } from "uuid";


@Injectable()
export class BookService {
public books : BookDto[] = []

// add book
addBookService(book:BookDto):BookDto{
  book.id= uuidv4()
  this.books.push(book)
  return book
}

// Update book
updateBookService(book:BookDto):BookDto{
  let bookIndex = this.books.findIndex(x => x.id == book.id)
  this.books[bookIndex] = book
  return book
}

// delte book

deleteBookService(bookId:string):string{
  let bookIndex = this.books.findIndex(x => x.id == bookId)
  this.books.splice(bookIndex,1)
  return `The book with this id ${bookId} has been deleted`
}

// get All Book
getAllBookService():BookDto[]{
  return this.books
}


}