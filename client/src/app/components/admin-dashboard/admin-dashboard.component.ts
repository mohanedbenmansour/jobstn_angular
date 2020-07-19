import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/post';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.userService.deleteEmail();
    this.userService.deleteRole();
    this.userService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
}
