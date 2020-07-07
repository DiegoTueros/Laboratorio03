export class preSale {
    constructor(computer) {
        this._computer = computer;
        this._totalPrice = 0;
    }
    getcomputer() {
        return this._computer;
    }
    totalPrice() {
        for (let computer of this._computer._components) {
            this._totalPrice = this._totalPrice + computer.getprice();
        }
    }
    gettotalPrice() {
        return this._totalPrice;
    }
}
