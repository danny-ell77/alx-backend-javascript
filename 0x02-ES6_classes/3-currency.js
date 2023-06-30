export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for the code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new Error('Code must be a string.');
    }
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string.');
    }
  }

  // Method to display the currency in the desired format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
