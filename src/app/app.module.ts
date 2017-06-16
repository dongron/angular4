import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './componenets/login/login.component';
import {PlacesDetailsComponent} from './componenets/places-details/places-details.component';
import {PlacesListComponent} from './componenets/places-list/places-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdToolbarModule, MdButtonModule, MdInputModule} from '@angular/material';
import { NotFoundComponent } from './componenets/not-found/not-found.component';

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
    path: 'details',
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
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
