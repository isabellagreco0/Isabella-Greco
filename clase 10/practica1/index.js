// PRACTICA  DE CONDICIONALES

// EJERCICIO 1
let mensaje = "vas a salir de tu casa?";
let resultado = confirm(mensaje);
if (resultado) {
    alert("Chequeá el pronóstico del tiempo antes de salir");
}
else {
    alert("Qué bueno que te quedes. Va a llover mucho hoy.");
}

// EJERCICIO 2
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Nombre del usuario:" + nombre);

let edad = prompt("¿Cuántos años tenés?");
console.log("Edad del usuario:" + edad);

let fanDeportes = confirm("¿Te gustan los deportes?");
console.log("¿Es fan de los deportes?:", fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas");



let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function () {
        if (this.fanDeportes) {
            return "Sí, soy fan de los deportes";
        }
        else {
            return "No soy tan fan aún de los deportes";
        }
    }
};
console.log(usuario.deportistaProfesional());


// PRACTICA  DE FUNCIONES
// EJERCICIO 1
let numero1 = prompt("ingresa un numero");
console.log("Numero:" + numero1);
let numero2 = prompt("ingresa otro numero");
console.log("Otro numero:" + numero2);

function multiplicar(numero1, numero2) {
    let resultadoo = numero1 * numero2
    return "El resultado de multiplicar" + numero1 + numero2 + "es:" + resultadoo
}
console.log(multiplicar(numero1, numero2))


// EJERCICIO 2
let nacionalidad = prompt("¿Cuál es tu nacionalidad?");
let profesion = prompt("¿Cuál es tu profesión?");
let kmsRecorridos = prompt("¿Cuántos kilómetros caminás por día?");


function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if (nacionalidad === "argentino" && profesion === "musico" && kmsRecorridos > 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }

}
let resultadooooo = alert(filosofoHipster(nacionalidad, profesion, kmsRecorridos))
console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos));





