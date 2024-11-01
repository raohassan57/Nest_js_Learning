import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth.jwt.stretygy';

@Module({
  imports:  [
    PassportModule,
    JwtModule.register({
      secret: JwtConstants,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [ AuthService ,UserService,PassportLocalStrategy, JwtStrategy],
})
export class AuthModule {}
