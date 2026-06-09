// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let UsuariosMayores = [];
let UsuariosMenores = [];

for (let user of users) {
    if (user.years < 18){
        UsuariosMenores.push(user.name + ' -> ' + user.years + ' años')};

    if (user.years >= 18){
        UsuariosMayores.push(user.name + ' -> ' + user.years + " años")}
};

console.log(" "); //espacios para que se vea mejor en la consola.
console.log("Usuarios menores de edad: ", UsuariosMenores);
console.log(" ");
console.log("Usuarios mayores de edad: ", UsuariosMayores);
console.log(" ");

