import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbdTableBasic } from './app.component';


@NgModule({
  declarations: [
    NgbdTableBasic,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [NgbdTableBasic]
  
})
export class AppModule { }

