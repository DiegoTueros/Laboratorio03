import { component } from './component.js';
export class injectPrinter extends component {
    constructor() {
        super("Impresora a Injección", 200, "Cannon", 3);
        this.printData = () => {
            console.log("Yo muestro datos");
        };
    }
}
