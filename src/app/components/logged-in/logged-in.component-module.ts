import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {LoggedInTooComponentModule} from "../logged-in-too/logged-in-too.component-module";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterModule.forChild([
      {
        path: '',
        component: LoggedInComponent
      },
    ]),
    LoggedInTooComponentModule,
    AsyncPipe,
    JsonPipe,
    NgIf,
  ],
  declarations: [LoggedInComponent],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
