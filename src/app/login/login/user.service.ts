import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private url: string = "http://localhost:8080/login/";

  // public login(username: string, password: string) {
  //   const encodeData = btoa(`${username}:${password}`)
  //   console.log(encodeData)
  //   const httpOptions = {
  //   headers: new HttpHeaders({'Authorization' : 'Basic ' + encodeData})  ,
  //   };
  //   return this.http.post(this.url, null, httpOptions);
  // }

  login(user: User) : Observable<any>{
    let url = this.url;
    return this.http.post(url, user)
  }

}
