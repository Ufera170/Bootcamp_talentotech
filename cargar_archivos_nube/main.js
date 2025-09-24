fetch('http://localhost:3000/characters')//Obtener el archivo del sevidor
    .then(response => response.json()) //Parsear la respuesta a JSON
    .then(data => {
        //imprimir personajes
        for(let i = 0;i < data.length;i++){
            console.log(data[i]);
        }
    }).catch(err => console.error('Error: ', err));//Manejo de errores