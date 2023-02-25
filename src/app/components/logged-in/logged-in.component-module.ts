import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule
  ],
  declarations: [LoggedInComponent],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
