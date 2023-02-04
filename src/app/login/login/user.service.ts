import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private url: string = "http://localhost:8080/login/";

  // public login(user: any) {
  //   const encodeData = btoa(user)
  //   console.log(encodeData)
  //   const httpOptions = {
  //   headers: new HttpHeaders({'Authorization' : 'Basic ' + encodeData})  ,
  //   };
  //   return console.log(this.http.post(this.url, null, httpOptions));
  // }

  public login(user: User): Observable<HttpResponse<User>> {
    const encodeData = btoa(user.username + ":" + user.password);
    console.log(encodeData)
    const httpOptions = {
      headers: new HttpHeaders({'Authorization' : 'Basic ' + encodeData})  ,
      observe: 'response' as 'body'
    };
    console.log(httpOptions)
    return this.http.post<HttpResponse<User>>(this.url, {}, httpOptions)
  }

}
