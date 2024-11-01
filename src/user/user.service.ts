import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { role, users } from 'src/auth/constants';



@Injectable()
export class UserService {

  private users : User[] = users;


getUserByName (username: string): User {
  return  this.users.find(user => user.username === username);
}





}
