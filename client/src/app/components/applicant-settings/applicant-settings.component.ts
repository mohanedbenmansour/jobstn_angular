import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  onSubmit(form: NgForm) {
    this.userService.updateUser(this.userService.getId(), form.value).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
