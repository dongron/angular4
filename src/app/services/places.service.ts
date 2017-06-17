import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Place} from '../models/place';
import {User} from '../models/user';

@Injectable()
export class PlacesService {

  url = 'https://places-back-end.herokuapp.com/api/places/';

  constructor(private http: Http) {
  }

  getAllPlaces() {
    const urlString = this.url + 'all';
    console.log(urlString);
    return this.http.get(urlString);
  }

  getUsersPlaces(userEmail: string) {
    const urlString = this.url + 'all';
    console.log(urlString);
    this.http.get(urlString).subscribe(
      res => {
        const places: Place[] = res.json();
        let userPlaces: Place[] = [];
        for (const place of places) {
          if (place.ownerEmail === userEmail) {
            userPlaces.push(place);
          }
        }
        return userPlaces;
      }
    );
  }

  getPlaceDetails(id: string) {
    const urlString = this.url + 'byId/' + id;
    console.log(urlString);
    return this.http.get(urlString);
  }

  updatePlace(newPlace: Place) {

  }

}
