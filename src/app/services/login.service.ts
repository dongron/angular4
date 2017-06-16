import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  getUserForEmail(email) {
    return {login: "q@q.q", password: "q"};
  }


}
