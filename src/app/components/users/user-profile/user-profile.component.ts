import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { users } from '../../../modals/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userdata!: users;
  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.getData(8).subscribe((data: any) => {
      this.userdata = data;
      console.log(this.userdata);
    });
  }
}
