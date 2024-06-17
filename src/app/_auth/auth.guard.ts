import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { UserAuthService } from "../_services/user-auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class authGuard implements CanActivate{

  constructor(private userAuthService: UserAuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = route.data['roles'] as string;

    if(this.userAuthService.getRole() === role){
      console.log(this.userAuthService.getRole());
      console.log(role);
      return true;
    }else{
      this.router.navigate(['/forbidden']);
      console.log(this.userAuthService.getRole());
      console.log(role);
      return false;
    }
  }
  
}
