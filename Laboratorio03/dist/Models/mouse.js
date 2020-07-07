import { component } from './component.js';
export class mouse extends component {
    constructor() {
        super("Ratón", 50, "Microsoft", 2);
        this.readData = () => {
            console.log("Yo recibo datos");
        };
    }
}
