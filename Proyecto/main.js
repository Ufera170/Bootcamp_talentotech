//Obtener botones
const b_Inicio = document.getElementById('bInicio')
const b_sobre_nosotros = document.getElementById('bSobre-nosotros');
const b_contactos = document.getElementById('bContactos')

//Obtener sectores
const sectores = [document.getElementById('inicio'), 
                 document.getElementById('sobre-nosotros'),
                 document.getElementById('contactos')];

//Adaptar Escuchadores
b_Inicio.addEventListener('click', () => {ocultarSectores('inicio');});
b_sobre_nosotros.addEventListener('click', () => {ocultarSectores('sobre-nosotros');});
b_contactos.addEventListener('click', () => {ocultarSectores('contactos');});

//Funcion de ocultacion
function ocultarSectores (mantener){
    //Obtener sector
    sectorMantener = document.getElementById(mantener);

    //Recorrer arreglo
    sectores.forEach( elemento => {
        if (elemento === sectorMantener){
            elemento.style.display = null;
        }
        else{
            elemento.style.display = "none";
        }

        console.log(elemento);
    })
}