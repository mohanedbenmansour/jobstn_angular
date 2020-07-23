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
    userId: '',
  };
  constructor(private http: HttpClient) {}
  createPost(post: FormData) {
    return this.http.post('http://localhost:5000/addpost', post);
  }
  getPosts() {
    return this.http.get('http://localhost:5000/getAllposts/');
  }
  deletePost(id: string) {
    return this.http.delete('http://localhost:5000/deletepost/' + id);
  }
  testPost(image: FormData) {
    return this.http.post('http://localhost:5000/addpost', image);
  }
  getPostsByUser(id: string) {
    return this.http.get("'http://localhost:5000/getposts/" + id);
  }
}
