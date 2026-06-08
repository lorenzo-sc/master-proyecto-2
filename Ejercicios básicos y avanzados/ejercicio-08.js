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

// Aquí la respuesta que se ciñe al enunciado

function findLongestWord(stringList) {
    let longestWord = "";
    for (let word of stringList) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

console.log('La palabra que supuestamente es la más larga (ciñiendonos al enunciado) es -> "' + findLongestWord(avengers) + '"');

// El enunciado no lo pide, pero entiendo que al hablar de "la palabra más larga" lo justo es comparar solo los caracteres de cada palabra, así que descarto espacios y puntos antes de medir su longitud.

// Entonces para mi esta sería la resolución correcta:

function findRealLongestWord(stringList){ //la voy a llamar findRealLongestWord
    let LongestWord = ""; // Declaramos la variable LongestWord

    for (let Word of stringList){ //declaramos la variable Word y la asociamos en la función for

    let CleanWord = Word.replaceAll(" ","").replaceAll(".",""); //reemplazamos los valores de Word por su versión sin espacios y sin puntos (CleanWord)
    let CleanLongest = LongestWord.replaceAll(" ","").replaceAll(".",""); //reemplazamos los valores de LongestWord por su versión sin espacios y sin puntos (CleanLongest)


    if ( CleanWord.length > CleanLongest.length){ // si el tamaño de Word (sin espacios ni puntos) es mayor que el de LongestWord (sin espacios ni puntos)
        LongestWord = Word}   // La palabra (Word) será la más larga (LongestWord)
    }
    return (LongestWord); //devolvemos la palabra más larga
};


console.log('La palabra realmente más larga es -> "' + findRealLongestWord(avengers) + '"'); // llamamos a la función para que se ejecute en la consola respecto a la constante "avengers" que se definió al inicio


