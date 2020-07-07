import { computer } from './computer.js';

export class preSale {

    public _computer : computer;
    private _totalPrice : number;

    constructor( computer: computer){
        this._computer = computer;
        this._totalPrice = 0;
    }

    getcomputer(): computer{
        return this._computer;
    }

    totalPrice() {
        for (let computer of this._computer._components){
            this._totalPrice = this._totalPrice + computer.getprice();
        }
    }

    gettotalPrice(): number{
        return this._totalPrice
    }
}