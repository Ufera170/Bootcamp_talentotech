//Obtener modulos de nodojs
const fs = require('fs');//Modulo de manejo de archivos

//Obtener la ruta del archivo json
const filePath = require('path').join(__dirname, 'characters.json')//

//Cargar archivo e imprimir valores
fs.readFile(filePath , 'utf-8', (err, data) => {
    try{
        //Comprobar errores
        if(err) 
            throw e;

        //Parsear objeto y obtener arreglo
        const personajes = JSON.parse(data).characters;

        //Imprimir fichas
        for(let i = 0;i < personajes.length ;i++)
            console.log(personajes[i]);
    }
    //Manejo de execpciones
    catch(e){
        console.error(e);
    }
})