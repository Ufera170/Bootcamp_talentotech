//Imports
import sumar from './matematica.js';

document.getElementById('btnSumar').addEventListener('click', Operacion("suma"));
document.getElementById('btnRestar').addEventListener('click', Operacion("resta"));
document.getElementById('btnMultiplicacion').addEventListener('click', Operacion("multiplicacion"));
document.getElementById('btnDivision').addEventListener('click', Operacion("division"));
document.getElementById('btnModulo').addEventListener('click', Operacion("modulo"));

function Operacion(op){

    //Variables
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    //Aplicar operacion
    switch(op.toLowerCase()){
        case "suma":
            resultado = num1 + num2;
        break;
        case "resta":
            resultado = num1 - num2;
        break;
        case "multiplicacion":
            resultado = num1 * num2;
        break;
        case "division":
            resultado = num1 / num2;
        break;
        case "modulo":
            resultado = num1 % num2;
        break;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
