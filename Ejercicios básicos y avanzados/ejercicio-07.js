//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        return numberOne + " es el mayor de los dos"
    }
    if (numberOne < numberTwo){
        return numberTwo + " es el mayor de los dos"
    }
    else { //debemos tener en cuenta también que pueden ser iguales
        return "Son iguales, no hay uno mayor que otro"
    }
};

console.log(greaterNumber (4,4)); // modificando estos 2 parametros obtienes los 3 posibles resultados.

// igualmente pongo que se ejecute un ejemplo para los 3 casos posibles:

console.log(greaterNumber(2, 4)); // mayor el segundo
console.log(greaterNumber(9, 1)); // mayor el primero
console.log(greaterNumber(5, 5)); // iguales
