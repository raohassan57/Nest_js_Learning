
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConstants } from './constants';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  
  constructor(
    private jwtService: JwtService, 
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtConstants,
    });
  }

  async validate(user:User): Promise<any>{
    console.log('JwtStrategy...');
    const { password, ...result } = user
    return result
  }


  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.email };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
