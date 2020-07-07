import { component } from './component.js';
export class touchScreen extends component {
    constructor() {
        super("Pantalla Tactil", 350, "Lenovo", 4);
        this.printData = () => {
            console.log("Yo muestro datos");
        };
        this.readData = () => {
            console.log("Yo recibo datos");
        };
    }
}
