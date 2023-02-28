import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, switchMap, tap} from 'rxjs';
import {STORAGE} from "./storage";

@Injectable()
export class AuthService {
  private _loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!this._storage.getItem('isLoggedIn'));
  public loggedIn$: Observable<boolean> = this._loggedInSubject.asObservable();

  private _userAccessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('accessToken'));
  public userAccessToken$: Observable<string | null> = this._userAccessTokenSubject.asObservable();

  private _userRefreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('refreshToken'));
  public userRefreshToken$: Observable<string | null> = this._userRefreshTokenSubject.asObservable();

  constructor(private _httpClient: HttpClient, @Inject(STORAGE) private _storage: Storage) {
  }

  login(authData: any): any {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', authData).pipe(
      tap((data) => {
        this._loggedInSubject.next(true);
        this._storage.setItem('isLoggedIn', 'true');
        this._userAccessTokenSubject.next(data.data.accessToken);
        this._storage.setItem('accessToken', data.data.accessToken);
        this._userRefreshTokenSubject.next(data.data.refreshToken);
        this._storage.setItem('refreshToken', data.data.refreshToken);
      })
    )
  }

  getLoggedUser(): Observable<any> {
    return this._httpClient.get<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/me' );
  }

  refreshLogin(token: any) {
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
          this._storage.setItem('accessToken', accessToken);
          this._storage.setItem('refreshToken', refreshToken);

          return of(credentials);
        })
      );
  }
}
