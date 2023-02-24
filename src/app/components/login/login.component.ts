import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('test@lowgular.io', [Validators.required, Validators.email,]),
    password: new FormControl('test@lowgular.io', [Validators.required]),
  });

  constructor(private _authService: AuthService, private _router: Router) {}

  onFormSubmitted(form: FormGroup): void {
    this._authService.login({
        data: {
          email: form.get('email')?.value,
          password: form.get('password')?.value,
        },
      })
      .subscribe({
        next: () => {
          this._router.navigate(['/', 'logged-in'])
        },
        error: () => {
        }
      })
  }
}
