import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [BookModule, UserModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
