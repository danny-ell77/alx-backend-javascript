import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for the amount attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new Error('Amount must be a number.');
    }
  }

  // Getter and setter for the currency attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new Error('Currency must be an instance of the Currency class.');
    }
  }

  // Method to display the full price in the desired format
  displayFullPrice() {
    const currencyName = this._currency.name;
    const currencyCode = this._currency.code;
    return `${this._amount} ${currencyName} (${currencyCode})`;
  }

  // Static method to convert the price using a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new Error('Amount and conversion rate must be numbers.');
  }
}
