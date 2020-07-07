import { component } from './component.js';
import { IoutputDevice } from '../Interface/IoutputDevice.js';

export class injectPrinter extends component implements  IoutputDevice{
    printData: Function;
    constructor() {
        super("Impresora a Injección", 200, "Cannon", 3);
        this.printData = () => {
            console.log("Yo muestro datos")
        }
    }
} 