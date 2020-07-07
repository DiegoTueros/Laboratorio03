import { component } from './component.js';
export class laserPrinter extends component {
    constructor() {
        super("Impresora Laser", 300, "HP", 3);
        this.printData = () => {
            console.log("Yo muestro datos");
        };
    }
}
