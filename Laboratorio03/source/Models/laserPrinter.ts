import { component } from './component.js';
import { IoutputDevice } from '../Interface/IoutputDevice.js';

export class laserPrinter extends component implements  IoutputDevice{
    printData: Function;
    constructor() {
        super("Impresora Laser", 300, "HP", 3);
        this.printData = () => {
            console.log("Yo muestro datos")
        }
    }
    
    
} 