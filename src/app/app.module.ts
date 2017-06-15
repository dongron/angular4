import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { PlacesDetailsComponent } from './componenets/places-details/places-details.component';
import { PlacesListComponent } from './componenets/places-list/places-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlacesDetailsComponent,
    PlacesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
