import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Place} from '../models/place';

@Injectable()
export class PlaceDetailsService {

  url = 'https://places-back-end.herokuapp.com/api/places/';

  constructor(private http: Http) {
  }

  getPlaceDetails(id: string) {
    const urlString = this.url + 'byId/' + id;
    console.log(urlString);
    return this.http.get(urlString);
  }

  updatePlace(newPlace: Place) {
    
  }

}
