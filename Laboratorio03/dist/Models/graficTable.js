import { component } from './component.js';
export class graficTable extends component {
    constructor() {
        super("Tableta grafica", 70, "Apple", 2);
        this.readData = () => {
            console.log("Yo recibo datos");
        };
    }
}
