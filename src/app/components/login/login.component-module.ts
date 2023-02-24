import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: [LoginComponent]
})
export class LoginComponentModule {
}
