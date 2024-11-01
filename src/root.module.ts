import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookModule, UserModule, PaymentsModule, AuthModule],
  controllers: [AuthController],
  providers: [],
})
export class RootModule {}
