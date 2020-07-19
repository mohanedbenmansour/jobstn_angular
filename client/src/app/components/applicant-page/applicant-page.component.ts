import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/post';
@Component({
  selector: 'app-applicant-page',
  templateUrl: './applicant-page.component.html',
  styleUrls: ['./applicant-page.component.scss'],
})
export class ApplicantPageComponent implements OnInit {
  posts: Post[];
  constructor(
    private userService: UserService,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.readPosts();
  }
  logout() {
    this.userService.deleteEmail();
    this.userService.deleteRole();
    this.userService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
  readPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data['msg'];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
