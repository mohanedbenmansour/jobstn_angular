import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-applicant-settings',
  templateUrl: './applicant-settings.component.html',
  styleUrls: ['./applicant-settings.component.scss'],
})
export class ApplicantSettingsComponent implements OnInit {
  userModel = {
    email: '',
    password: '',
    name: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onSubmit(form: Form) {
    this.userService.updateUser(this.userService.getId(), form).subscribe(
      (data) => {
        console.log('test');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
