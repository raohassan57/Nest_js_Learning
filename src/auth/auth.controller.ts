import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RoleGuard } from './role.guard';
import { users } from './constants';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService

  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/Login')
  login(@Request() req) {
    const token = this.authService.genrateToken(req.user);
    return token 
  }



  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    console.log('this is the auth controller');
    
    return users;
  }





}
