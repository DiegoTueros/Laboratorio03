import { component } from './component.js';

export class printer extends component{
    constructor(name: string, price: number ,brand: string, type: number){
        super(name, price, brand, type);
    }
} 