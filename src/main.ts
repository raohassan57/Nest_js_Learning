import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { Request, Response, NextFunction } from 'express';

// function globalMiddleWareOne(req: Request, res: Response, next:NextFunction  ) {
//   console.log('this is the global middleware number 1');
//   next()
// }



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RootModule, { abortOnError: false });
  // app.use(globalMiddleWareOne)
  await app.listen(3000);
}
bootstrap();
