// Buscar la palabra más larga: 
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList){
    let LongestWord = ""; // Declaramos la variable LongestWord

    for (let Word of stringList){ //declaramos la variable Word y la asociamos en la función for
    
    if ( Word.length > LongestWord.length){ // si el tamaño de Word es mayor que el de LongestWord
        LongestWord = Word}   // La palabra (Word) será la más larga (LongestWord)
    }
    return (LongestWord); //devolvemos la palabra más larga
};

console.log(findLongestWord(avengers)); // llamamos a la función para que se ejecute en la consola respecto a la constante "avengers" que se definió al inicio