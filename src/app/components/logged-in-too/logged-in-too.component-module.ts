import {NgModule} from '@angular/core';
import { LoggedInTooComponent } from './logged-in-too.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    MatCardModule
  ],
  declarations: [LoggedInTooComponent],
  providers: [],
  exports: [LoggedInTooComponent]
})
export class LoggedInTooComponentModule {
}
