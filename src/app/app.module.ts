import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AgregarComponent } from './crud/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,

    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
