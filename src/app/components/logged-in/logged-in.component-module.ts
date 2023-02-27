import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {LoggedInTooComponent} from "../logged-in-too/logged-in-too.component";
import {LoggedInTooComponentModule} from "../logged-in-too/logged-in-too.component-module";

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  declarations: [LoggedInComponent],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
