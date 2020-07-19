import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../shared/post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[];
  selectedPost: Post = {
    title: '',
    enterprise: '',
    type: '',
    address: '',
    date: new Date(),
    image: '',
    salary: null,
    experience: '',
    description: '',
    email: '',
    tags: '',
  };
  constructor(private http: HttpClient) {}
  createPost(post: FormData) {
    return this.http.post('addpost', post);
  }
  getPosts() {
    return this.http.get('getAllposts/');
  }
  deletePost(id: string) {
    return this.http.delete('deletepost/' + id);
  }
  testPost(image: FormData) {
    return this.http.post('addpost', image);
  }
}
