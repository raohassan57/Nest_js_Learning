import { CallHandler, ExecutionContext, Injectable } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";



@Injectable()
export class PaymentsInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    request.body.name = 'this is the added name'
    request.body.Age = 15
    console.log('Before...');


    const now = Date.now();
    return next
      .handle()
      .pipe(
        map((data) => {
          console.log(data);
          
          data ={
            name:'intercept',
            validity: "10days"}
          return data 
        })
      )
  }
}