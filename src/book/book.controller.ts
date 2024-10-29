import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./data/book.dto";
import { BookPipe } from "./pipes/book.pipe";



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

@Get("/:id")
findBookById(@Param("id", ParseIntPipe) id:number):string{
  console.log(id, typeof(id));
  
  return 'book by id'
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
  addBook(@Body( new ValidationPipe()) book:BookDto):BookDto{
    return this.bookService.addBookService(book)
  }


}