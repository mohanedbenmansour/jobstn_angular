import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  serverErrorMessages: boolean;
  submitted: boolean;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  constructor(public userService: UserService, private router: Router) {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.createUser(form.value).subscribe(
      (data) => {
        alert('you have signed up successfully');
        form.reset();
      },
      (err) => {
        console.log(form.value);
        this.serverErrorMessages = true;
      }
    );
  }
  get email() {
    return this.profileForm.get('email');
  }
  get name() {
    return this.profileForm.get('name');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get role() {
    return this.profileForm.get('role');
  }
}
