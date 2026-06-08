//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

//Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

//Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

//Puedes usar este array para probar tu función:

const words = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];

function repeatCounter(list) {
    let contador = {}; // establecemos la variable contador

    for( let palabra of list){ // para cada elemento "palabra" de la lista
        if (contador[palabra]) // Si el contador ve que una palabra existe suma 1
            contador[palabra]++
        else // Si la palabra aún no estaba en el contador, se queda en 1
            contador[palabra] = 1;
    }
    return contador; // tras el bucle se devuelve la variable contador
};

console.log(repeatCounter(words)); // console log que llama a la funcion sobre la constante words con el array