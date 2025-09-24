let persona = {
    nombre: "Juan",
    apellido: "Martines Martines",
    edad: 22,
    amigos: ["Harry", "Andrea", "Vivian"]
}

for(let i;i < persona.amigos.length;i++){
    console.log(`Amigo${i}:  ${persona.amigos[i]}`);
}
console.log("")

for(let amigo in persona.amigos[0]){
    console.log(amigo);
}


persona.edad += 1;
persona.amigos.push("Neville");
persona.ocupacion = "Ministro de magia";

console.log(nombres[""]);
