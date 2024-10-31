import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';
import { Request } from 'express';


@Injectable()
export class UserGuard implements CanActivate { 
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean>  {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }

}



function validateRequest(request: Request): boolean {
  const authHeader = request.header('Authorization');
  
  // Check if the Authorization header exists and matches a specific value
  if (request.header('username') === 'admin' && request.header('password') === 'admin') {
    return true; // Valid request
  } else {
    return false; // Invalid request
  }
}