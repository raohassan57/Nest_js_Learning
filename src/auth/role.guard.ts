import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";



export class RoleGuard implements CanActivate {
  constructor(role : String) {
    this.rolePassed = role
  }

  private rolePassed : String
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean>  {  
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(user);
    if (user.role === this.rolePassed) {
      return true;  
    } else {
      return false; 
    }
  } 
}