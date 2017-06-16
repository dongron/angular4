export class User {
  private _id;
  private _v;
  private _username;
  private _email;
  private _password;
  private _city;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get v() {
    return this._v;
  }

  set v(value) {
    this._v = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get city() {
    return this._city;
  }
  set city(value) {
    this._city = value;
  }
}
