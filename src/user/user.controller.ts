import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException, HttpException, UseFilters, UseGuards } from '@nestjs/common';
import { UserExceptionFilter } from './user.exception.filter';
import { UserGuard } from './user.guard';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { role } from 'src/auth/constants';
import { RoleGuard } from 'src/auth/role.guard';


@Controller('users')
export class UserController {

  constructor(private readonly usersService: UserService) { }


  @Get('/AndroidDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(role.AndroidDeveloper))
  getAndroidDeveloper() {
    return "this is android developer"
  }


  @Get('/BackEndDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(role.BackEndDeveloper))
  getBackEndDeveloper() {
    return "this is BackEndDeveloper"
  }


  @Get('/FrontEndDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(role.FrontEndDeveloper))
  getFrontEndDeveloper() {
    return "this is FrontEndDeveloper"
  }


  @Get('/WebDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(role.WebDeveloper))
  getWebDeveloper() {
    return "this is WebDeveloper"
  }
 
}
