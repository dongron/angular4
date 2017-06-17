import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './componenets/login/login.component';
import {PlacesDetailsComponent} from './componenets/places-details/places-details.component';
import {PlacesListComponent} from './componenets/places-list/places-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdToolbarModule, MdButtonModule, MdInputModule} from '@angular/material';
import {NotFoundComponent} from './componenets/not-found/not-found.component';

import {LoginService} from './services/login.service';
import {PlacesService} from './services/places.service';
import {PlaceDetailsService} from './services/place-details.service';
import {ReservationsService} from './services/reservations.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Log in'}
  },
  {
    path: 'places',
    component: PlacesListComponent,
    data: {title: 'Places'}
  },
  {
    path: 'details/:id',
    component: PlacesDetailsComponent,
    data: {title: 'Place details'}
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlacesDetailsComponent,
    PlacesListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [
    LoginService,
    PlacesService,
    PlaceDetailsService,
    ReservationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
