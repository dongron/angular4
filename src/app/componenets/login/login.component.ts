import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError;

  constructor(private router: Router, private loginService: LoginService, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.isError = false;
  }

  _navigateToDetails() {
    this._navigate();
  }

  private _authenticateUser(loginValue, passwordValue) {
    const userLoginData = this.loginService.getUserForEmail(loginValue);
    console.log('user data from service', userLoginData, loginValue, passwordValue);
    if (loginValue === userLoginData.login && passwordValue === userLoginData.password) {
      this._navigate();
    } else {
      this._showError();
    }

  }

  private _navigate() {
    this.router.navigate(['/places', {}]);
  }

  private _showError() {
    this.isError = true;
  }



}



