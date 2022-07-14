import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
