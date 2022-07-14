import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signIn = true;
  signUp = false;

  toggleState() : void{
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
