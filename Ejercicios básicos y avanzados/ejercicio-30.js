// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

// Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

/*

Si cuando el enunciado habla de canciones entendemos canción como:

-> Mi interpretación: Canción = solo el título

hacemos un push(track.title) y el else [track.title]

-> Pero si entendemos: Canción = objeto entero solo tenemos que cambiar:

push(track.title) a (push(track)) y el [track.title] del else a solo [track]

*/

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const playlist = {};

for (let track of tracks){ // Para cada track de tracks:
if ( playlist["Canciones de " + track.genre] ) { // Si el track.genre ya existe en playlist 
    playlist["Canciones de " + track.genre].push(track.title) // añado el track.title a ese grupo (push)
}
else { // Si no 
    playlist["Canciones de " + track.genre] = [track.title] // creo un array nuevo con el track dentro ([track.title]) y lo guardo en ese género
}
};

console.log(playlist); // En las siguientes vueltas, los géneros que ya creé entran por el if y se les hace push. Al final, cada género tiene su array con sus canciones.

/* 

Una tontería que me quedaría pendiente aunque el ejercicio está resuelto:

Que haya un espacio adicional entre los grupos creados:

{
  'Canciones de Metal': [ 'Enter Sandman' ],
  'Canciones de Rock': [
    'Back in Black',
    'Bohemian Rhapsody',
    'Thunderstruck',
    'Hotel California',
    'Stairway to Heaven'
  ],
  'Canciones de Pop': [ 'Blinding Lights', 'Bad Guy' ],
  'Canciones de Country': [ 'Old Town Road' ],
  'Canciones de Grunge': [ 'Smells Like Teen Spirit' ]
}

Quede como:

{
    Canciones de Metal: [ 'Enter Sandman' ],
    
    Canciones de Rock: 
    [
    'Back in Black',
    'Bohemian Rhapsody',
    'Thunderstruck',
    'Hotel California',
    'Stairway to Heaven'
    ],

    Canciones de Pop: [ 'Blinding Lights', 'Bad Guy' ],
    
    Canciones de Country: [ 'Old Town Road' ],
    
    Canciones de Grunge: [ 'Smells Like Teen Spirit' ]
}

*/ 

// Otras posibles ideas para esta práctica:

// Un contador que añada la cantidad de canciones que tiene cada playlist