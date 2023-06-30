export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw TypeError('name must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw TypeError('name must be a string');
    }
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
