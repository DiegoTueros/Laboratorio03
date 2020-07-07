import { component } from './component.js';
export class cpu extends component {
    constructor() {
        super("CPU", 50, "Intel", 1);
        this.proccesData = () => {
            console.log("Yo proceso la data");
        };
    }
}
