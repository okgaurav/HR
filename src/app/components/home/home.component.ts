import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state="AUTH"

  toggleState(newState: string):void{
    this.state=newState;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
