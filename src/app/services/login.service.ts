import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  url = 'https://places-back-end.herokuapp.com/api/users/byEmail/';

  constructor(private http: Http) {
  }

  getUserForEmail(email) {
    const urlString = this.url + email;
    console.log(urlString);
    return this.http.get(urlString).map(
        res => {
          console.log('response',res);
          res.json();
        }
      );
  }

  getUserForEmailMockup(email) {
    return {login: "q@q.q", password: "q"};
  }


}
