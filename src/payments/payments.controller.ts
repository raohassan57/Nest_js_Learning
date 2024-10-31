import { Body, Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { PaymentsInterceptor } from './payments.interceptor';
import { resolve } from 'path';
import { Request, Response } from 'express';


@Controller('payments')
export class PaymentsController {

  @Post()
  @UseInterceptors(PaymentsInterceptor)
  create( @Body("name") name : any) {
   const reply = `This action adds a new payment ${name}`;

    return reply
  }

  
}
