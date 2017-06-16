import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Place} from '../../models/place';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.css']
})
export class PlacesDetailsComponent implements OnInit {

  placeObj;

  constructor(router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const placeId = params['id'];
      console.log(placeId);
    });
  }

}
