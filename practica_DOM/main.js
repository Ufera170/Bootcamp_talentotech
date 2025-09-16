// Selecciono el h1
const titulo = document.querySelector("#titulo");

// Selecciono el párrafo por su ID
const parrafo = document.querySelector("#parrafo1");

const botonTitulo = document.querySelector("#botonTitulo");
const botonParrafo = document.querySelector("#botonParrafo");

// Mostrar los elementos en consola
console.log(titulo);
console.log(parrafo);
console.log("texto del h1:", titulo.textContent);

botonTitulo.addEventListener("click", () => {
    titulo.textContent = "Nuevo titulo";
});

botonParrafo.addEventListener("click", () => {
    parrafo.textContent = "Nuevo parrafo";
});
