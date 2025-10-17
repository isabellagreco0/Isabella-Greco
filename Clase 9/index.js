// PRACTICA  DE FUNCIONES

// EJERCICIO 1

function rectangulo(b, h) {
    return b * h;
}
console.log(rectangulo(10, 2))



// EJERCICIO 2
function triangulo(b, h) {
    return (b * h) / 2;
}
console.log(rectangulo(10, 2))



// EJERCICIO 3
function dolarHoy(a) {
    return a / 1400;
}
console.log(dolarHoy(500000))


// EJERCICIO 4
function precioFinal(p) {
    return p + (p * 0.21);
}
console.log(precioFinal(100))


// EJERCICIO 5
function mitad(numero) {
    return numero / 2;
}
console.log(mitad(10))


// PRACTICA  DE OBJETOS

// EJERCICIO 1 y 2
let misDatos = {
    nombre: "isabella",
    apellido: "greco",
    dni: 47247626,
    comidadFavoritas: ["pizza", "hamburguesa", "sushi"],
    edad: 18,
    saludar: function () {
        return ("Hola mi nombre es" + this.nombre + this.apellido + " y tengo" + this.edad + "anios. Mi primer comida favorita es" + this.comidadFavoritas[0])
    }
}
console.log(misDatos.saludar())


// EJERCICIO 3
let auto = {
    marca: "ford",
    modelo: "Ka",
    anio: 1900,
    color: "rojo",
    posicion: 0,
    avanzar: function (numero) {
        return this.posicion = this.posicion + numero

    },
    retroceder: function (numero) {
        return this.posicion = this.posicion - numero
    }
}

auto.avanzar(4)
console.log(auto.posicion)


// EJERCICIO 4
let autonuevo = {
    marca: "ford",
    modelo: "Ka",
    anio: 1900,
    color: "rojo",
    posicion: 0,
    moverse: function (numero) {
        this.posicion = this.posicion + numero
    }
}

// EJERCICIO 5
let ironMan = {
    nombre: "Iron Man",
    Equipo: "Avengers",
    Poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function (numero) {
        this.energia = this.energia - 10
        return ("Poder Elegido de" + this.nombre + ":" + this.Poderes[numero] + ". Energia restante:" + this.energia)
    }
}


let hulk = {
    nombre: "Hulk",
    Equipo: "Avengers",
    Poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function (numero) {
        this.energia = this.energia - 10
        return ("Poder Elegido de " + this.nombre + ":" + this.Poderes[numero] + ". Energia restante:" + this.energia)
    }
}
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(0))


// PRACTICA  DE BUCLES
// EJERCICIO 1

for (let i = 1; i <= 5; i++) {
    console.log("Practicando con el bucle for");
}

for (let i = 1; i <= 10; i++) {
    console.log("La variable i tiene el valor {i}");
}

// EJERCICIO 2

let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875, -7301, 3041, 686]

let total = 0
for (let i = 0; i < ganancias.length; i++) {
    total = total + ganancias[i]
    console.log(total)
}


// EJERCICIO 3

let healingIsDifficult = ['Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously']

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}



// EJERCICIO 4
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i = 0; i < got.length; i++) {
    console.log("soy" + got[i].nombre + got[i].apellido + "de la ciudad" + got[i].ciudad)
}


