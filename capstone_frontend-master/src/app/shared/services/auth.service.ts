import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string;
  hasUserloggedIn = new BehaviorSubject<boolean>(false);
  askToSignIn = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8012/';
  }

  

  loginUser(user) {
    return this.http.post(this.baseURL + 'users/access-token', user)
      .pipe(map((response: any) => {
        if (response) {
          localStorage.setItem('authResponse', JSON.stringify(response));
          this.setUserDetails();
        }
        return response;
      }));
  }

  resetPassword(user) {
    return this.http.put(this.baseURL + 'users/access-token/password', user)
      .pipe(map(response => {
        return response;
      }));
  }

  setUserDetails() {
   
   }
}
