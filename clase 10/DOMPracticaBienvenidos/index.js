// PRACTICA  DE DOM
// EJERCICIO 1

alert("Bienvenidos a mi sitio")

let continuar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector(".saludo");

if (continuar) {
    saludo.innerText = "¡Qué alegría que quieras continuar tu visita!";

    let nombre = prompt("¿Cuál es tu nombre?");
    document.querySelector("h1").innerText = "Bienvenido" + nombre;

    let containerGeneral = document.querySelector(".container-general");
    let accesoDenegado = document.querySelector("#accesoDenegado");
    let edad = prompt("¿Cuál es tu edad?");
    if (edad < 18) {
        containerGeneral.style.display = "none"
        accesoDenegado.style.display = "block"
    }
    else {
        let gustaProgramar = confirm("¿Te gusta la programación?");
        let fondo = document.querySelector(".background-img");

        if (gustaProgramar) {
            fondo.innerHTML = "<img src='./img/programmer.jpeg '> "
        }
        else {
            fondo.innerHTML = " <img src='./img/gatito.jpeg'> "
        }
        let nuevaImagen = prompt("Ingresa la URL de una imagen tuya:");
        let avatar = document.querySelector(".avatar");
        avatar.src = nuevaImagen;

        let pelicula = {
            nombre: prompt("Nombre de tu película favorita:"),
            director: prompt("Director de la película:"),
            duracion: Number(prompt("Duración en minutos:")),
            actor: prompt("Actor o actriz principal:")
        };
         document.querySelector("#pelicula").style.display = "block"


        document.querySelector("#nombre").innerText = pelicula.nombre;

        document.querySelector("#director").innerText = pelicula.director; 

        document.querySelector("#duracion").innerText = pelicula.duracion; 
        
        document.querySelector("#actor").innerText = pelicula.actor;



    }

}


else {
    saludo.innerText = "Lamentamos que no quieras continuar tu visita.";
}









