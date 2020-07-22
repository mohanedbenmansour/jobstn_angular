import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/post';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-applicant-posts',
  templateUrl: './applicant-posts.component.html',
  styleUrls: ['./applicant-posts.component.scss'],
})
export class ApplicantPostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private userService: UserService,
    private router: Router,
    private postService: PostService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.readPosts();
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
