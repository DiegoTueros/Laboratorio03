import { component } from './component.js';
import { IoutputDevice } from '../Interface/IoutputDevice.js';

export class screen extends component implements  IoutputDevice{
    printData: Function;
    constructor() {
        super("Pantalla", 120, "AOC", 3);
        this.printData = () => {
            console.log("Yo muestro datos")
        }
    }
    
    
} 