let querystring = location.search
console.log(querystring);

let objquerystring = new URLSearchParams(querystring)

let resultado = objquerystring.get("id")

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

let name = document.querySelector("#nombre")
let status = document.querySelector ("#status")
let especie = document.querySelector("#especie")
let imagen = document.querySelector ("#imagen")

name.innerHTML = data.name
status.innerHTML = data.status
especie.innerHTML = data.species
imagen.src = data.image

    })
        .catch (function (error) {
            console.log("Error: " + error);
        })




        