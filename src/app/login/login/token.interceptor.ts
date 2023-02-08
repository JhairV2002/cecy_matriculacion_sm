import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem("crm_token")!= null && request.url!= "http://localhost:8080/login/"){
      let tokenRequest = request.clone(
        {
          headers: request.headers.set('Authorization', String(sessionStorage.getItem('crm_token')))
        }
      );
      let token = sessionStorage.getItem('crm_token')
      return next.handle(tokenRequest)
    }
    return next.handle(request);
  }
}
