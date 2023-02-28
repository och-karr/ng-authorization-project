import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, switchMap, tap} from 'rxjs';

@Injectable()
export class AuthService {
  private _loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('isLoggedIn'));
  public loggedIn$: Observable<boolean> = this._loggedInSubject.asObservable();

  private _userAccessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('accessToken'));
  public userAccessToken$: Observable<string | null> = this._userAccessTokenSubject.asObservable();

  private _userRefreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('refreshToken'));
  public userRefreshToken$: Observable<string | null> = this._userRefreshTokenSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(authData: any): any {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', authData).pipe(
      tap((data) => {
        this._loggedInSubject.next(true);
        localStorage.setItem('isLoggedIn', 'true');
        this._userAccessTokenSubject.next(data.data.accessToken);
        localStorage.setItem('accessToken', data.data.accessToken);
        this._userRefreshTokenSubject.next(data.data.refreshToken);
        localStorage.setItem('refreshToken', data.data.refreshToken);
      })
    )
  }

  getLoggedUser(): Observable<any> {
    return this._httpClient.get<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/me' );
  }

  refreshLogin() {
    let token: string | null = '';
    this.userRefreshToken$.subscribe((value) => {
      token = value;
    });

    return this._httpClient.post<any>(
        'https://us-central1-courses-auth.cloudfunctions.net/auth/refresh',
        {
          data: {
            refreshToken: token,
          },
        }
      )
      .pipe(
        switchMap((credentials) => {
          const accessToken = credentials.data.accessToken;
          const refreshToken = credentials.data.refreshToken;
          this._userAccessTokenSubject.next(accessToken);
          this._userRefreshTokenSubject.next(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          return of(credentials);
        })
      );
  }
}
