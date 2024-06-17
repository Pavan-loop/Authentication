import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private userAuthService: UserAuthService, private router: Router, private userService: UserService){}

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

  check(role){
    if (this.userAuthService.getRole() !== 'undefined' && this.userAuthService.getRole() === role){
      return true;
    }
    return false;
  }

}
