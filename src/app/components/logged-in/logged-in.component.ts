import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logged-in',
  styleUrls: ['./logged-in.component.scss'],
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
  readonly userData$: Observable<Object> = this._authService.getLoggedUser();

  constructor(private _authService: AuthService, private _router: Router) {
  }
}
