// export interface BookDto{
//   id: string,
//   title: string,
//   author: string,
//   publisher: string,

import { IsInt, IsString, } from "class-validator";

// }
export class BookDto{
  @IsInt({message: 'id must be an integer'})
  id: number;

  @IsString({message: 'name must be a string'})
  name: string;

}