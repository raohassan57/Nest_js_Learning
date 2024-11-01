import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor( private readonly usersService: UserService) {}



  @Post()
  @UseGuards(AuthGuard('local'))
  findAll() {
    return this.usersService.users;
  }
}
