import { CvrComponent } from './cvr/cvr.component';
import { HomeComponent } from './Home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArrComponent } from './arr/arr.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,CvrComponent, ArrComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
