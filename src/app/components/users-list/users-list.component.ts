import { Component } from '@angular/core';
import { UserApiServiceService } from '../../services/userApiService/user-api-service.service';
import {
  User,
  UserServiceService,
} from '../../services/userService/user-service.service';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../create-edit-user/create-edit-user.component';
import { UserCardComponent } from '../user-card/user-card/user-card.component';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  standalone: true,
  imports: [MatDialogActions, UserCardComponent]
})
export class UsersListComponent {
  constructor(
    private userApiService: UserApiServiceService,
    public usersService: UserServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userApiService.getUsers().subscribe((response: any) => {
      this.usersService.setUsers(response);
    });
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user.id);
  }

  openModal() {
    this.dialog.open(CreateEditUserComponent, {
      width: '60%',
      height: '400px'
    });
  }
}
