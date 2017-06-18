import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Place} from '../../models/place';
import {PlacesService} from '../../services/places.service';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.css']
})
export class PlacesDetailsComponent implements OnInit {

  place: Place;
  reservations;

  constructor(router: Router, private activatedRoute: ActivatedRoute,
              private placesService: PlacesService, private reservationsService: ReservationsService) {
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

}
