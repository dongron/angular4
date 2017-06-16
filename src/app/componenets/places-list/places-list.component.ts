import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  placesList;

  constructor() { }

  ngOnInit() {

    this.placesList = [];
    this.placesList.push({"name": "test","date":"21/11/11"});
  }

}
