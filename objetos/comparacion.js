let persona1 = { nombre: "Juan" };
let persona2 = persona1;
let persona3 = { nombre: "Juan" };

let num1 = 1;
let num2 = "1";
let personaJson = '{"Emplado":[{"Empanada": "Si"}]}';

let processedData = JSON.parse(personaJson);

console.log(processedData.Emplado.Empanada)