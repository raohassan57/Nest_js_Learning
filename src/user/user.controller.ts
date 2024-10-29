import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('users')
export class UserController {


  @Post()
  create( ) {
    return 'Thsi api will create user';
  }

  @Get()
  findAll() {
    return 'This action returns all users';
  }


}
