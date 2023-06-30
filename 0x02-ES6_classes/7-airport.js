export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw TypeError('name must be a string');
        }
    }

    get code() {
        return this._code;
    }

    set code(value) {
        if (typeof value === 'string') {
            this._code = value;
        } else {
            throw TypeError('code must be a string');
        }
    }

    toString() {
        return this.code;
    }
}
