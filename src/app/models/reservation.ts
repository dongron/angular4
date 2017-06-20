export class Reservation {
  private _id;
  private _v;
  private _clientEmail;
  private _ownerEmail;
  private _placeName;
  private _time;
  private _long;

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

  get clientEmail() {
    return this._clientEmail;
  }

  set clientEmail(value) {
    this._clientEmail = value;
  }

  get ownerEmail() {
    return this._ownerEmail;
  }

  set ownerEmail(value) {
    this._ownerEmail = value;
  }

  get placeName() {
    return this._placeName;
  }

  set placeName(value) {
    this._placeName = value;
  }

  get time() {
    return this._time;
  }

  set time(value) {
    this._time = value;
  }

  get long() {
    return this._long;
  }

  set long(value) {
    this._long = value;
  }

}
