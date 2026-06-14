// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

const peliculas_por_decadas = {}; // Objeto en el que voy a agrupar las películas

starWarsMovies.sort((a, b) => a.releaseYear - b.releaseYear); // Los ordeno por año para que entren en el bucle ya ordenadas y facilitar su visión en la terminal

for (let movie of starWarsMovies) {

    // Convierto los datos al formato en el que quiero que se presenten

    let decada_calculada = (Math.floor( movie.releaseYear / 10  ) * 10); // (1983 / 10) = 198.3 → Math.floor = 198 → * 10 = 1980
    let nombre_decada; // Establezco otra variable vacía en la que aparcar los valores transformados de la decada_calculada

    if (decada_calculada < 2000) {
        nombre_decada = ("Década de los " + (decada_calculada % 100))
    }
    else {
        nombre_decada = ("Década de los " + decada_calculada)
    }

    // Preparo la estructura de la respuesta esperada

    if (peliculas_por_decadas[nombre_decada]){ // ¿peliculas_por_decadas[nombre_decada] ya tiene algo?

    // Si:
        peliculas_por_decadas[nombre_decada].push(movie)} //peliculas_por_decadas[nombre_decada].push(movie) → añade la peli a lo que ya había

    // No:
else {
        peliculas_por_decadas[nombre_decada] = [movie]; // peliculas_por_decadas[nombre_decada] = [movie] → mete la peli ahí por primera vez
    }
};
console.log(peliculas_por_decadas); // Muestra en consola el objeto donde las claves son las décadas y los valores son arrays de películas