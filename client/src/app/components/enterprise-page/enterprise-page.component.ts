import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';

import { Post } from 'src/app/shared/post';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enterprise-page',
  templateUrl: './enterprise-page.component.html',
  styleUrls: ['./enterprise-page.component.scss'],
})
export class EnterprisePageComponent implements OnInit {
  newPost: Post;
  postToSend: any;

  constructor(
    public postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  image: File = null;
  onFileChanged(event) {
    this.image = <File>event.target.files[0];
    console.log(this.image);
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  onSubmit(form: NgForm) {
    const formData = new FormData();
    const today = new Date();
    formData.append('image', this.image);

    formData.append('title', form.value.title);
    formData.append('enterprise', form.value.enterprise);
    formData.append('type', form.value.type);
    formData.append('address', form.value.address);
    formData.append('date', today.toISOString());
    formData.append('salary', form.value.salary);
    formData.append('experience', form.value.experience);
    formData.append('description', form.value.description);
    formData.append('email', this.userService.getEmail());
    formData.append('tags', form.value.tags);

    this.postService.createPost(formData).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout() {
    this.userService.deleteEmail();
    this.userService.deleteRole();
    this.userService.deleteToken();
    this.userService.deleteId();
    this.router.navigateByUrl('/signin');
  }
}
