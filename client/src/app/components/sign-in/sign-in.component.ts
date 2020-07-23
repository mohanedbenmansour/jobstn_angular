import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  userModel = {
    email: '',
    password: '',
  };
  constructor(public userService: UserService, private router: Router) {}

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSuccessMessage: boolean;
  serverErrorMessages: string;

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) this.router.navigate(['/home']);
  }
  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res) => {
        console.log(res['data'].role);
        this.userService.setToken(res['accessToken']);
        this.userService.setRole(res['data'].role);
        this.userService.setEmail(res['data'].email);
        this.userService.setId(res['data'].userId);
        this.goToDashboard();
      },
      (err) => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  goToDashboard() {
    let role = this.userService.getRole();
    if (role == 'admin') this.router.navigateByUrl('/admindashboard');
    if (role == 'enterprise') this.router.navigateByUrl('/enterprise');
    if (role == 'applicant') this.router.navigateByUrl('/home');
  }
}
