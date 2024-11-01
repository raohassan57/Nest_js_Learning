import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Request, Response } from 'express';


@Catch(HttpException)
export class UserExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();


    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      Message: exception.message,
    });



  }
}