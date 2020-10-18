import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../sign-up/signup-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** Injected HttpClient Class */
  constructor(private httpClient: HttpClient) { }

  /** This is the signup request itself to our Java REST API, using an HTTP POST and URI */
  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload);
  }
  /**An Observable is basically a function that can return a stream of values to an observer over time */
}