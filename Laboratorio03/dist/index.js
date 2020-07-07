import { Inputs } from './DataBase/InputsDatabase.js';
import { CPUs } from './DataBase/CPUsDatabase.js';
import { Outputs } from './DataBase/OutputsDatabase.js';
import { Specials } from './DataBase/SpecialDatabase.js';
import { component } from './Models/component.js';
import { preSale } from './Models/preSale.js';
import { computer } from './Models/computer.js';
let Computer = new computer();
let listas = document.querySelector("#filas");
let RealizarCompra = document.querySelector("#RealizarCompra");
let modalBody = document.querySelector("#modal-body");
let cpus = [...CPUs, ...Inputs, ...Outputs, ...Specials];
function render() {
    for (let i = 0; i < cpus.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        td1.id = "position";
        td2.id = "name";
        td3.id = "brand";
        td4.id = "price";
        td5.id = "type";
        td1.innerText = (i + 1).toString();
        td2.innerText = cpus[i].getname();
        td3.innerText = cpus[i].getbrand();
        td4.innerText = cpus[i].getprice().toString();
        if (cpus[i].gettype() == 1) {
            td5.innerText = "Procesador";
        }
        if (cpus[i].gettype() == 2) {
            td5.innerText = "Dispositivo de Entrada";
        }
        if (cpus[i].gettype() == 3) {
            td5.innerText = "Dispositivo de Salida";
        }
        if (cpus[i].gettype() == 4) {
            td5.innerText = "Dispositivos E/S";
        }
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        button1.id = "agregar";
        button2.id = "eliminar";
        button1.classList.add("btn", "btn-indigo", "btn-sm", "m-0");
        button2.classList.add("btn", "btn-indigo", "btn-sm", "m-0");
        button1.setAttribute("dataofname", cpus[i].getname());
        button1.setAttribute("dataofbrand", cpus[i].getbrand());
        button1.setAttribute("dataofprice", cpus[i].getprice().toString());
        button1.setAttribute("dataoftype", cpus[i].gettype().toString());
        button2.setAttribute("dataofnameD", cpus[i].getname());
        button2.setAttribute("dataofbrandD", cpus[i].getbrand());
        button2.setAttribute("dataofpriceD", cpus[i].getprice().toString());
        button2.setAttribute("dataoftypeD", cpus[i].gettype().toString());
        button1.onclick = addproduct;
        button2.onclick = deleteproduct;
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.classList.add("fa", "fa-check-circle");
        p2.classList.add("fa", "fa-trash");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td7);
        tr.appendChild(td8);
        td7.appendChild(button1);
        td8.appendChild(button2);
        button1.appendChild(p1);
        button2.appendChild(p2);
        listas.appendChild(tr);
    }
    RealizarCompra.onclick = realizarComprar;
}
function addproduct() {
    let dataname = this.getAttribute("dataofbrand");
    let databrand = this.getAttribute("dataofname");
    let dataprice = this.getAttribute("dataofprice");
    let datatype = this.getAttribute("dataoftype");
    let name = dataname ? dataname : "";
    let brand = databrand ? databrand : "";
    let price = dataprice ? Number.parseFloat(dataprice) : 0.0;
    let type = datatype ? Number.parseInt(datatype) : 0;
    let Component = new component(name, price, brand, type);
    Computer.add(Component);
    console.log(Computer._components.length);
}
function deleteproduct() {
    let dataname = this.getAttribute("dataofbrandD");
    let databrand = this.getAttribute("dataofnameD");
    let dataprice = this.getAttribute("dataofpriceD");
    let datatype = this.getAttribute("dataoftypeD");
    let name = dataname ? dataname : "";
    let brand = databrand ? databrand : "";
    let price = dataprice ? Number.parseFloat(dataprice) : 0.0;
    let type = datatype ? Number.parseInt(datatype) : 0;
    let Component = new component(name, price, brand, type);
    Computer.delete(Component);
    console.log(Computer._components.length);
}
function realizarComprar() {
    if (Computer.verify()) {
        console.log("es ordenador");
        let presale = new preSale(Computer);
        presale.totalPrice();
        console.log(presale.gettotalPrice());
        modalBody.innerText = "El precio es: " + presale.gettotalPrice();
    }
    else {
        console.log("no es ordenador");
        modalBody.innerText = "No ha seleccionado componentes de ordenador";
    }
}
render();
//let nombreproc1 = document.querySelector("#nombreproc1") as HTMLTableDataCellElement;
