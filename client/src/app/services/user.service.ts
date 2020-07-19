import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    role: '',
  };
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private http: HttpClient) {}
  createUser(user: User) {
    return this.http.post('signup', user);
  }
  login(authCredentials) {
    return this.http.post('login', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get('getuser');
  }
  //token field
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  //role field
  setRole(role: string) {
    localStorage.setItem('ROLE', role);
  }
  getRole() {
    return localStorage.getItem('ROLE');
  }
  deleteRole() {
    localStorage.removeItem('ROLE');
  }
  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }
  //email field
  setEmail(email: string) {
    localStorage.setItem('Email', email);
  }
  getEmail() {
    return localStorage.getItem('Email');
  }
  deleteEmail() {
    localStorage.removeItem('Email');
  }
  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
