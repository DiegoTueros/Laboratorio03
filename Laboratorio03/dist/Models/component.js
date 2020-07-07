export class component {
    constructor(name, price, brand, type) {
        this._name = name;
        this._price = price;
        this._brand = brand;
        this._type = type;
    }
    getprice() {
        return this._price;
    }
    setprice(price) {
        this._price = price;
    }
    getbrand() {
        return this._brand;
    }
    setbrand(price) {
        this._brand = price;
    }
    getname() {
        return this._name;
    }
    setname(name) {
        this._name = name;
    }
    gettype() {
        return this._type;
    }
    settype(type) {
        this._type = type;
    }
}
