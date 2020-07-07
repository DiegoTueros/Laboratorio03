import { component } from './component.js';
import { IinputDevice } from '../Interface/IinputDevice.js';

export class keyboard extends component implements IinputDevice{
    readData: Function;
    constructor(){
        super("Teclado",100,"Asus", 2);
        this.readData = () => {
            console.log("Yo recibo datos")
        }
    } 
} 