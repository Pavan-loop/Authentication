import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ){}

  login(loginForm : NgForm){
    this.userService.login(loginForm.value).subscribe((response: any) => {
      this.userAuthService.setRole(response.role);
      this.userAuthService.setToken(response.token);

      const role = response.role;
      if (role === "ADMIN"){
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user'])
      }
    },
  error => {
    console.log(error)
  })
  }
}
