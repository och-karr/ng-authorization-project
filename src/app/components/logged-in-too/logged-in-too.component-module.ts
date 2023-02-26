import {NgModule} from '@angular/core';
import { LoggedInTooComponent } from './logged-in-too.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MatCardModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: LoggedInTooComponent
    //   }
    // ])
  ],
  declarations: [LoggedInTooComponent],
  providers: [],
  exports: [LoggedInTooComponent]
})
export class LoggedInTooComponentModule {
}
