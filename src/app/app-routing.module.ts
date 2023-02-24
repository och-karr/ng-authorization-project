import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginComponentModule} from './components/login/login.component-module';
import {AuthServiceModule} from './services/auth.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    // {path: 'auto-login', component: undefined},

    // {
    //   path: 'auto-login',
    //   children: [
    //     {
    //       path: 'login',
    //       component: LoginComponent
    //     }
    //   ]
    // },

    {path: 'login', component: LoginComponent}
  ]), LoginComponentModule, AuthServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
