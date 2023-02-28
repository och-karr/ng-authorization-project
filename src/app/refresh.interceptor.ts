import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

  // constructor() {}
  //
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((e:HttpErrorResponse) => {
        if (e.status === 403 && e.error.message === 'Token is invalid') {

          return this._authService.refreshLogin().pipe(
            switchMap((credentials) => {
              const newReq = request.clone({
                headers: request.headers.set(
                  'Authorization',
                  `Bearer ${credentials.data.accessToken}`
                ),
              });

              return next.handle(newReq);
            })
          );
        }

        return throwError(() => e)
      })
    );
  }
}
