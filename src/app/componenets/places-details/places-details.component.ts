import {Component, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Place} from '../../models/place';
import {PlacesService} from '../../services/places.service';
import {ReservationsService} from '../../services/reservations.service';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {ReservationDialogComponent} from '../reservation-dialog/reservation-dialog.component';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.css']
})
export class PlacesDetailsComponent implements OnInit {

  place: Place;
  reservations;

  constructor(router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService,
              private placesService: PlacesService, private reservationsService: ReservationsService,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.place = new Place();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const placeId = params['id'];
        console.log(placeId);
        this.placesService.getPlaceDetails(placeId).subscribe(
          data => {
            this.place = data.json();
          }
        );
      });

    this.reservationsService.getAllReservations().subscribe(
      reservations => {
        // this.reservations = reservations.json();
        const results = Object.keys(reservations.json()).map(
          function (e) {
            return reservations.json()[e];
          });
        for (const result of results) {
          result.time = new Date(result.time);
        }
        this.reservations = results;
      }
    );
  }

  openDialog(reservation) {
    const config = new MdDialogConfig();
    const dialogRef = this.dialog.open(ReservationDialogComponent, config);
    if (reservation && reservation.clientEmail && reservation.time && reservation.long) {
      const dateTime = reservation.time.getFullYear() + '-'
        + ((reservation.time.getMonth() + 1) < 10 ? '0' : '') + (reservation.time.getMonth() + 1) + '-'
        + (reservation.time.getDate() < 10 ? '0' : '') + reservation.time.getDate() + 'T'
        + (reservation.time.getHours() < 10 ? '0' : '') + reservation.time.getHours() + ':'
        + (reservation.time.getMinutes() < 10 ? '0' : '') + reservation.time.getMinutes();
      dialogRef.componentInstance.email = reservation.clientEmail;
      dialogRef.componentInstance.resDateTime = dateTime;
      dialogRef.componentInstance.howLong = reservation.long;
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      let reservationToAdd = {clientEmail: "", ownerEmail: "", placeName: "", time: new Date(), long: 0};
      reservationToAdd.clientEmail = result.email;
      reservationToAdd.ownerEmail = this.loginService.getUser().email || this.place.ownerEmail || "none";
      reservationToAdd.placeName = this.place.name;
      reservationToAdd.time = new Date(result.date);
      reservationToAdd.long = Number(result.long);

      if (reservation) {

      } else {
        this.reservationsService.addReservation(reservationToAdd);
        // .subscribe(
        //   reservationRes  => this.reservations.push(reservationRes),
        //   error =>  console.log(<any>error));
      }
    });
  }

  remove(id) {
    this.reservationsService.removeReservation(id).subscribe(
      result => {
        console.log(result);
        for (const reservation of this.reservations) {
          if (reservation['_id'] == id) {
            this.reservations.splice(reservation, 1);
          }
        }
      }
    );
  }

}

