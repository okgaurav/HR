import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
   }
   getData(){
    let url="http://localhost:8080/api/Users";
    return this.http.get(url);
  }
}
