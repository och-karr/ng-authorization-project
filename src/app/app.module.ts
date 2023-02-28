import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginGuard} from "./guards/login/login.guard";
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./auth.interceptor";
import {RefreshInterceptor} from "./refresh.interceptor";
import {STORAGE} from "./services/storage";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
    { provide: STORAGE, useValue:localStorage },
    LoginGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
