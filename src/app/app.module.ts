import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { PlacesDetailsComponent } from './componenets/places-details/places-details.component';
import { PlacesListComponent } from './componenets/places-list/places-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdToolbarModule, MdButtonModule, MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlacesDetailsComponent,
    PlacesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
