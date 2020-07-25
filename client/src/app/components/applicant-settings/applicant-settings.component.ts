import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-applicant-settings',
  templateUrl: './applicant-settings.component.html',
  styleUrls: ['./applicant-settings.component.scss'],
})
export class ApplicantSettingsComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
  });
  serverErrorMessages: boolean;
  submitted: boolean;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    this.userService.updateUser(this.userService.getId(), form.value).subscribe(
      (data) => {
        alert('you have updated your profile successfully ');

        console.log(data);
      },
      (err) => {
        this.serverErrorMessages = true;
        console.log(err);
      }
    );
  }
  get email() {
    return this.profileForm.get('email');
  }
  get name() {
    return this.profileForm.get('name');
  }
}
