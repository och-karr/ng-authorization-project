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
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    RouterModule.forChild([
      // { path: '', component: LoggedInComponent, pathMatch: 'full'},
      {
        // path: 'logged-in',
        // component: LoggedInComponent,
        // path: 'logged-in',
        // component: LoggedInComponent,
        // children: [{ path: 'logged-in-too', component: LoggedInTooComponent }],
        path: 'logged-in-too',
        // pathMatch: 'full',
        component: LoggedInTooComponent,
        loadChildren: () => LoggedInTooComponentModule
        // loadChildren: () => import('../logged-in-too/logged-in-too.component-module').then(m => m.LoggedInTooComponentModule)

      }
    ])
  ],
  declarations: [LoggedInComponent],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
