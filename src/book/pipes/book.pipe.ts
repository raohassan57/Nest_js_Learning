import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BookDto} from '../data/book.dto'
import { plainToInstance} from 'class-transformer'
import { validate } from "class-validator";



export class BookPipe implements PipeTransform{
async  transform(value: any, metadata: ArgumentMetadata): Promise<any> {

    const bookClass = plainToInstance(BookDto, value) // transform(value)
    const errors = await validate(bookClass)

    if(errors.length > 0){
      throw new BadRequestException('Validation failed' + JSON.stringify(errors))
    }
    console.log(value, typeof(value));
    
    return value
  }
}