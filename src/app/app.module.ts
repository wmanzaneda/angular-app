import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';







@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent,BodyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
