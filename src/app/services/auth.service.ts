import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable()
export class AuthService {
  private _loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('isLoggedIn'));
  public loggedIn$: Observable<boolean> = this._loggedInSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(authData: any): Observable<void> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', authData).pipe(
      tap(() => {
          this._loggedInSubject.next(true);
          localStorage.setItem('isLoggedIn', 'true');
        }
      )
    )
  }
}
