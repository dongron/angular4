import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  parentRouter;
  loginInput;
  passwordInput;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToDetails() {
    this.navigate();
  }

  private navigate() {
    this.router.navigate(['/places', {}]);
  }

}
