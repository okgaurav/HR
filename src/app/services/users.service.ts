import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'server/api/v1/Users_New/3';
    return this.http.get(url);
  }
}
