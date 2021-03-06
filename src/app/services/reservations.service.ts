import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Place} from '../models/place';
import {User} from '../models/user';
import {Reservation} from '../models/reservation';

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

  addReservation(reservation: Reservation) {
    const newReservation = reservation.toJSON();
    const urlString = this.url + 'add';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log(urlString);
    console.log('service, posting parsed', newReservation);
    return this.http.post(urlString, JSON.stringify(newReservation), options)
      .map(response => console.log('add response', response))
      .catch(this.handleError);
  }

  modifyReservation(changedReservation) {
    const urlString = this.url + 'update';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log('service, modifying reservation', changedReservation);
    return this.http.put(urlString, JSON.stringify(changedReservation), options)
      .map(response => console.log('update response', response))
      .catch(this.handleError);
  }

  removeReservation(id) {
    const urlString = this.url + 'remove';
    const headers = new Headers({'Content-Type': 'application/json', 'id': id});
    const options = new RequestOptions({headers: headers});
    console.log('removing reservation id', id);
    return this.http.delete(urlString, options)
      .map(response => console.log(response))
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
