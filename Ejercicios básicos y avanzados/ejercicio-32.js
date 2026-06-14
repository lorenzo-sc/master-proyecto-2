// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

// Utiliza este array para probar tu función.

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1961 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {

    let miembro_más_antiguo = xMen [0]; // Asumimos al principio que el más antiguo es el que está en la posición 0 del array (Wolverine). Aunque realmente da igual por donde empezemos ya que el bucle va a recorrer todos los elementos.

    for (let miembro of xMen){
        if ( miembro.year < miembro_más_antiguo.year){ // inicial: Wolverine (1974) ← el let, xMen[0]
            miembro_más_antiguo = miembro;
        }
        }
/*

Vuelta 1 - Wolverine (1974): ¿1974 < 1974? NO → el más antiguo no puede ser otro que Wolverine
Vuelta 2 - Cyclops (1963):   ¿1963 < 1974? SÍ → el más antiguo pasa a Cyclops
Vuelta 3 - Storm (1975):     ¿1975 < 1963? NO → el más antiguo sigue siendo Cyclops
Vuelta 4 - Phoenix (1961):   ¿1961 < 1963? SÍ → el más antiguo pasa a Phoenix
Vuelta 5 - Beast (1963):     ¿1963 < 1961? NO → el más antiguo sigue siendo Phoenix
Vuelta 6 - Gambit (1990):    ¿1990 < 1961? NO → el más antiguo sigue siendo Phoenix
Vuelta 7 - Nightcrawler (1975): ¿1975 < 1961? NO → el más antiguo sigue siendo Phoenix
Vuelta 8 - Magneto (1963):   ¿1963 < 1961? NO → el más antiguo sigue siendo Phoenix
Vuelta 9 - Professor X (1963): ¿1963 < 1961? NO → el más antiguo sigue siendo Phoenix
Vuelta 10 - Mystique (1978): ¿1978 < 1961? NO → el más antiguo sigue siendo Phoenix

Una vez el bucle termina → El más antiguo: Phoenix (1961)

*/
        return miembro_más_antiguo; // devuelve el más antiguo una vez finalizado el bucle for.
        
    };


console.log(" ");
console.log( "El miembro más antiguo es -> " + findOldestXMen(xMen).name);
console.log(" ");