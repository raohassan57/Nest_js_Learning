import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BookModule, UserModule, PaymentsModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
    }),
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
