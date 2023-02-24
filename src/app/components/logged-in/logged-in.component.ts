import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  styleUrls: ['./logged-in.component.scss'],
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
}
