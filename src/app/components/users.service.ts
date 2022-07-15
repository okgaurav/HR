import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
   }
   getData(){
    let url="server/api/Users/1";
    return this.http.get(url);
  }
}
