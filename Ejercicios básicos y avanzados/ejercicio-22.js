// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
// Recuerda no usar frutas duplicadas.
// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// --- Versión del enunciado: reemplaza los nombres en el propio array ---

let contadorFrutas = 0;

for (let schedule of foodSchedule) {
    if (!schedule.isVegan) {
        schedule.name = fruits[contadorFrutas];
        contadorFrutas++;
    }
}

console.log(foodSchedule);
console.log(" ");

// --- Mi enfoque alternativo: Un array nuevo con los nombres/frutas ---

const foodScheduleOriginal = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let contadorFrutas2 = 0;
let newSchedule = [];

for (let schedule of foodScheduleOriginal) {
    if (schedule.isVegan === false) {
        newSchedule.push(fruits[contadorFrutas2]);
        contadorFrutas2++;
    }
    if (schedule.isVegan === true) {
        newSchedule.push(schedule.name);
    }
}

console.log(newSchedule);
console.log(" ");