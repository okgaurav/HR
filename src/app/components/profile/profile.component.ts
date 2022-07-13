import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username="Utkarsh";
  employeeId="123456";
  emailId="utsrivastava@soprabanking.com";
  department="R&D";
  contactNumber="1234567890"
  designation="Engineer Trainee"
  constructor() {
    
   }

  ngOnInit(): void {
  
  }

}
