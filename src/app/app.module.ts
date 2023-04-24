import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './crud/crud.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
