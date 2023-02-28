import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private _authService: AuthService){};

  logoutUser() {
    this._authService.logout();
    window.location.reload();
  }
}
