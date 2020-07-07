import { component } from './component.js';
export class screen extends component {
    constructor() {
        super("Pantalla", 120, "AOC", 3);
        this.printData = () => {
            console.log("Yo muestro datos");
        };
    }
}
