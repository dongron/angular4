export class Place {
  private _id;
  private _v;
  private _name;
  private _street;
  private _streetNr;
  private _city;
  private _geo;
  private _ownerEmail;

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

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get street() {
    return this._street;
  }

  set street(value) {
    this._street = value;
  }

  get streetNr() {
    return this._streetNr;
  }

  set streetNr(value) {
    this._streetNr = value;
  }

  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  get geo() {
    return this._geo;
  }

  set geo(value) {
    this._geo = value;
  }

  get ownerEmail() {
    return this._ownerEmail;
  }
  set ownerEmail(value) {
    this._ownerEmail = value;
  }
}
