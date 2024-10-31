import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException, HttpException, UseFilters, UseGuards } from '@nestjs/common';
import { UserExceptionFilter } from './user.exception.filter';
import { UserGuard } from './user.guard';


@Controller('users')
export class UserController {


  @Post()
  @UseGuards(new UserGuard())
 @UseFilters(UserExceptionFilter)
  create( ) {

    return 'Thsi api will create user';
  }

  @Get()
  findAll() {
    throw new HttpException('This is the custom error we defined', 404);
    return 'This action returns all users';
  }

 
}
