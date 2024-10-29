import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./data/book.dto";



@Controller('book')
export class BookController {

  constructor(private bookService:BookService){ 
  }

@Get()
findAllBooks():string{
  return 'This api will return All books'
}


@Post()
addBookReturn():string{
  return 'This api will add new book'
}






  @Get("/findAll")
  getAllBooks():BookDto[]{
    return this.bookService.getAllBookService()
  }

  @Put('/update')
  updateBook(@Body() book:BookDto):BookDto{
    return this.bookService.updateBookService(book)
  }

  @Delete('/delete/:bookId')
  deleteBook(@Param() bookId:string):string{ 
    return this.bookService.deleteBookService(bookId)
  }

  @Post('/add')
  addBook(@Body() book:BookDto):BookDto{
    return this.bookService.addBookService(book)
  }


}