const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

console.log(jedi);

const leia = {Nombre: "Leia", Apellido: "Organa", Edad: 20};

console.log("Soy " + leia.Nombre + " " + leia.Apellido + ", tengo" + " " + leia.Edad + " años y soy una princesa de Alderaan.");


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const suma = sable1.precio + sable2.precio;

console.log("El importe por ambos sables ascendería a " + suma + " $");



const precioBaseGlobal = 25000; /* Solo tendría que cambiar este valor y cambiaría el precio final de ambas naves */

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
nave1.precioFinal = precioBaseGlobal + nave1.precioBase;

const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log("Tras los impuestos, el " + nave1.nombre + " saldría a " + nave1.precioFinal + " $");
console.log("Tras los impuestos, el " + nave2.nombre + " saldría a " + nave2.precioFinal + " $");
