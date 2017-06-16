import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../models/user';

@Injectable()
export class LoginService {

  url = 'https://places-back-end.herokuapp.com/api/users/byEmail/';
  user: User;

  constructor(private http: Http) {
  }

  getUserForEmail(email) {
    const urlString = this.url + email;
    console.log(urlString);
    return this.http.get(urlString);
  }

  getUser() {
    return this.user || {};
  }

  setUser(user: User) {
    this.user = user;
  }

  getUserForEmailMockup(email) {
    return {login: "q@q.q", password: "q"};
  }


}
