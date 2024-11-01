import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [AuthController],
  providers: [UserService, PassportLocalStrategy],
})
export class AuthModule {}
