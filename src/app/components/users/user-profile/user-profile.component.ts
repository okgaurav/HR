import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username="Utkarsh";
  employeeId="123456";
  emailId="utsrivastava@soprabanking.com";
  department="R&D";
  contactNumber="1234567890"
  designation="Engineer Trainee"
  role="HR"
  constructor(private user: UsersService) { 
    this.user.getData().subscribe(data=>
      {
        console.log(data);
      })
  }

  ngOnInit(): void {
  }

}
