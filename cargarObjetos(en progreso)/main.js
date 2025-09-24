//Elementos
const contenedor = document.querySelector('.container');

fetch('http://127.0.0.1:60059/api/characters')//Obtener el archivo del sevidor
    .then(response => response.json()) //Parsear la respuesta a JSON
    .then(data => {
        //Crear fichas
        for(let i = 0;i < data.length;i++){
            const ficha = document.createElement('div');//Crear div

            ficha.classList.add('ficha');//Agrear clase ficha
            
            //Agregar codigo HTML
            ficha.innerHTML = `<h2>Name: ${data[i].name}</h2>
            <p>Height${data[i].height}</p>
            <p>Mass: ${data[i].mass}</p>
            <p>Hair Color: ${data[i].hair_color}</p>
            <p>Skin Color: ${data[i].skin_color}</p>
            <p>Eye Color: ${data[i].eye_color}</p>
            <p>Birth Year: ${data[i].birth_year}</p>
            <p>Species: ${data[i].species}</p>
            <p>Starships: ${data[i].starships}</p>`

            contenedor.appendChild(ficha);//Agregar ficha al contenedor
        }
    }).catch(err => console.error('Error: ', err));//Manejo de errores