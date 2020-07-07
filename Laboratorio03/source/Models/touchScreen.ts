import { component } from './component.js';
import { IoutputDevice } from '../Interface/IoutputDevice.js';
import { IinputDevice } from '../Interface/IinputDevice.js';

export class touchScreen extends component implements  IoutputDevice, IinputDevice {
    printData: Function;
    readData: Function;
    constructor() {
        super("Pantalla Tactil", 350, "Lenovo", 4);
        this.printData = () => {
            console.log("Yo muestro datos")
        }
        this.readData = () => {
            console.log("Yo recibo datos")
        }
    }
} 