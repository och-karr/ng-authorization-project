import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._authService.loggedIn$.pipe(
      map((isLoggedIn) => {
        return isLoggedIn === activatedRoute.data['expected'] ? true : this._router.parseUrl(activatedRoute.data['redirectUrl'])
      })
    );

  }
}
