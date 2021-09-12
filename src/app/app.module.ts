import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbdTableBasic } from './app.component';
import { ClasesComponent } from './clases/clases.component';


@NgModule({
  declarations: [
    NgbdTableBasic,
    ClasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [NgbdTableBasic]
  
})
export class AppModule { }

