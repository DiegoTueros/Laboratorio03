import { component } from './component.js';
export class keyboard extends component {
    constructor() {
        super("Teclado", 100, "Asus", 2);
        this.readData = () => {
            console.log("Yo recibo datos");
        };
    }
}
