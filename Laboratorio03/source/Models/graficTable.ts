import { component } from './component.js';
import { IinputDevice } from '../Interface/IinputDevice.js';

export class graficTable extends component implements  IinputDevice{
    readData: Function;
    constructor() {
        super("Tableta grafica", 70, "Apple", 2);
        this.readData = () => {
            console.log("Yo recibo datos")
        }
    }
    
} 