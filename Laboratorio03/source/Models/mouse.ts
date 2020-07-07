import { component } from './component.js';
import { IinputDevice } from '../Interface/IinputDevice.js';

export class mouse extends component implements IinputDevice {
    readData: Function;
    constructor() {
        super("Ratón", 50, "Microsoft", 2);
        this.readData = () => {
            console.log("Yo recibo datos")
        }
    } 
} 