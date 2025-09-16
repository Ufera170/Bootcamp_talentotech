//Imports
import sumar from './matematica.js';

document.getElementById('btnSumar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value); 
    const suma = num1 + num2;
    const resultado = document.getElementById('resultado');

    resultado.textContent = `Resultado: ${suma}`;
});

document.getElementById('btnRestar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value); 
    const resta = num1 - num2;
    const resultado = document.getElementById('resultado');

    resultado.textContent = `Resultado: ${resta}`;
});