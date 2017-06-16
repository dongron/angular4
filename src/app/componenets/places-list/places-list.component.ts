import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';
import {PlacesService} from '../../services/places.service';
import {Place} from "../../models/place";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  title = "List of places";
  allPlaces: Place[];
  allPlacesList;
  userPlacesList = [];
  userData: User;

  constructor(private loginService: LoginService, private placesService: PlacesService) {
  }

  ngOnInit() {
    const user = this.userData = this.loginService.getUser();
    this.placesService.getAllPlaces().subscribe(
      (data) => {
        this.allPlaces = data.json();
        const results = Object.keys(data.json()).map(function (e) {
          return data.json()[e];
        });
        this.allPlacesList = results;
        for (const obj of results) {
          this.userPlacesList.push(obj);
        }
      }
    );
  }

  _details(place) {
    console.log(place);
  }

}
