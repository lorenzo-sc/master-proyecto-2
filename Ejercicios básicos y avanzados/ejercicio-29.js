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

/* 

1. Acumulador → cuando pides UN número (suma, promedio, total). Ej: el 28 (sumar duraciones), el 25 (contar).
2. Filtro a array nuevo → cuando pides una LISTA de los que cumplen algo. Ej: el 24 (humanos), el 23 (pelis por duración).
3. Contador/agrupar con objeto → cuando agrupas o cuentas cuántas veces aparece cada cosa. Ej: el 29 (por décadas), el 30 (por géneros).
4. Campeón/buscar uno → cuando pides UN solo elemento (el mayor, el más antiguo). Ej: el 27 (cartoon más antiguo).
5. Recorrer y mostrar → cuando solo imprimes varias cosas. Ej: el 15, el 16, el 17.

*/

// Tipo 3

const peliculas_por_decadas = {};

for (let movie of starWarsMovies) {

let decada_calculada = (Math.floor( movie.releaseYear / 10  ) * 10); /* 1983 / 10 = 198.3 + math.floor = 198 * 10 = 1980 % 100 = 80 */

if (peliculas_por_decadas[decada_calculada]){ // ¿peliculas_por_decadas[decada_calculada] ya tiene algo?

    peliculas_por_decadas[decada_calculada].push(movie) // Si ya tiene algo → peliculas_por_decadas[decada_calculada].push(movie) → añade la peli a lo que ya había.
}

else {
    peliculas_por_decadas[decada_calculada] = [movie]; // Si no tiene nada → peliculas_por_decadas[decada_calculada] = [movie] → mete la peli ahí por primera vez.
}
};

console.log(peliculas_por_decadas); // Mostramos en consola el array de las películas con su década
