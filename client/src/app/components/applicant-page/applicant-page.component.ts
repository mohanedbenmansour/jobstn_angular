import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-applicant-page',
  templateUrl: './applicant-page.component.html',
  styleUrls: ['./applicant-page.component.scss'],
})
export class ApplicantPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    this.userService.deleteEmail();
    this.userService.deleteRole();
    this.userService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
}
