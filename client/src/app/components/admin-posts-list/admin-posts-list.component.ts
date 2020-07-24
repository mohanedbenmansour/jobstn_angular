import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/post';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-posts-list',
  templateUrl: './admin-posts-list.component.html',
  styleUrls: ['./admin-posts-list.component.scss'],
})
export class AdminPostsListComponent implements OnInit {
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
