import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentModule } from './components/login/login.component-module';
import { AuthServiceModule } from './services/auth.service-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import {LoginGuard} from "./guards/login/login.guard";
import {LoggedInTooComponent} from "./components/logged-in-too/logged-in-too.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'auto-login',
      children: [
        {
          path: 'login',
          component: LoginComponent,
          canActivate: [LoginGuard],
          data: {expected: false, redirectUrl: '/auto-login/logged-in'}
        },
        {
          path: 'logged-in',
          component: LoggedInComponent,
          canActivate: [LoginGuard],
          data: {expected: true, redirectUrl: '/auto-login/login'},
          // children: [
          //   { path: '', component: LoggedInComponent, pathMatch: 'full' },
          // ],
          loadChildren: () => LoggedInComponentModule
          // loadChildren: () => import('./components/logged-in/logged-in.component-module').then(m => m.LoggedInComponentModule)
          // children: [
          //   {
          //     path: 'logged-in-too',
          //     component: LoggedInTooComponent
          //   }
          // ]
        },
      ]
    },
    { path: '', component: HomeComponent }
  ]), LoginComponentModule, AuthServiceModule, LoggedInComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
