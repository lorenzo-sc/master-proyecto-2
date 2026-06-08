/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función: */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let suma = 0; // la variable cuyo contenido cambia y llamamos suma tiene que empezar de 0 aunque podría empezar desde el primer number directamente

    for (let number of numberList){
        suma += number // Cada valor de numbers que hemos llamado number se suma al siguiente hasta acabar la lista.
    }

    return suma; // devuelve number que equivale a la suma de todos los number
};

console.log(sumNumbers(numbers)); // ejecuta la funcion en la terminal sobre la constante numbers