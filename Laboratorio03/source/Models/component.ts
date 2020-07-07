export class component {
    private _name: string;
    private _price: number;
    private _brand: string;
    private _type: number;

    constructor (name: string, price: number , brand: string, type: number){
        this._name = name;
        this._price = price;
        this._brand = brand;
        this._type = type;
    }

    getprice(): number{
        return this._price;
    }
    setprice(price: number){
        this._price = price;
    }
    getbrand(): string{
        return this._brand;
    }
    setbrand(price: string){
        this._brand = price;
    }
    getname(): string{
        return this._name;
    }
    setname(name: string){
        this._name = name;
    }
    gettype(): number{
        return this._type;
    }
    settype(type: number){
        this._type = type;
    }

}