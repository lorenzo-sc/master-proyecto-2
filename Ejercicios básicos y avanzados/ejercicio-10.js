// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

// sabiendo que el promedio = suma de todos los números / cantidad de números:

function average(numberList) {
    let suma = 0;

    for (let number of numberList){
        suma += number
    }

    return suma / numberList.length;
};

console.log("El valor promedio es -> " + average(numbers));