import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient) {
  }

  login(authData: any): Observable<void> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', authData)
  }
}
