import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getData(id: number) {
    let url = 'server/api/v1/Users_New/';
    return this.http.get(`${url}${id}`);
  }
}
