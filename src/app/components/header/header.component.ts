import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isNavbarCollapsed = true;
  public isLoggedIn: boolean = false;
  public isHr: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
    this.isHr = localStorage.getItem('user') == 'HR' ? true : false;
  }
}
