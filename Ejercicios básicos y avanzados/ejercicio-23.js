// Usa un bucle para crear 3 arrays de películas filtrados por categorías.

// Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

// Imprime cada array por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 }, 
    ];

let Pelicula_Corta = [];
let Pelicula_Normal = [];
let Pelicula_Larga = [];


for (let Pelicula of movies){
    if (Pelicula.durationInMinutes < 100){
        Pelicula_Corta.push(Pelicula) // ¿Dura menos de 100 mins? → Corta
    }
    else if (Pelicula.durationInMinutes > 200){
        Pelicula_Larga.push(Pelicula) // ¿Dura más de 200 mins? → Larga
    }
    else 
        Pelicula_Normal.push(Pelicula); // ¿Ni uno ni otro? → Normal
};

console.log(" ");
console.log("Estas son las películas de cortas: ");
console.log(Pelicula_Corta);

console.log(" ");
console.log("Estas son las películas normales: ");
console.log(Pelicula_Normal);

console.log(" ");
console.log("Estas son las películas largas: ");
console.log(Pelicula_Larga);
console.log(" ");