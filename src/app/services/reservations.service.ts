import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Place} from '../models/place';
import {User} from '../models/user';

@Injectable()
export class ReservationsService {

  url = 'https://places-back-end.herokuapp.com/api/reservations/';

  constructor(private http: Http) {
  }

  isReservationForPlace(reservation, placeName) {
    return reservation.placeName === placeName;
  }

  getAllReservations() {
    const urlString = this.url + 'all';
    console.log(urlString);
    return this.http.get(urlString);
  }

  getReservationsByPlaceName(placeName) {
    return this.getAllReservations().filter(this.isReservationForPlace.bind(this, placeName));
  }

  addReservation() {

  }

  removeReservation() {

  }

}
