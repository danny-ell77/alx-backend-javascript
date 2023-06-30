export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value === 'number') {
        this._name = value;
    } else {
        throw TypeError('name must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') {
        this._name = value;
    } else {
        throw TypeError('name must be a string');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
