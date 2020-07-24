import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
})
export class AdminUsersListComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['name', 'email', 'role'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data['msg'];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
