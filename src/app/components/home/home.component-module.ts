import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    RouterLink,
    MatButtonModule
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
