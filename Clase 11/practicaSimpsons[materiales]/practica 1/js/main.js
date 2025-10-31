// completar las variables para que el programa funcione

window.addEventListener('load', function () {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover", function () {
        let nombre = prompt("como te llamas?")
        let saludo = document.querySelector("#saludo");
        if (nombre) {
            saludo.innerText = "Bienvenid@" + " " + nombre;
        }
        else {
            saludo.innerText = "Bienvenid@";
        }
        saludo.style.textTransform = "uppercase";

        titulo.style.display = "none";

        let span = document.querySelector("span")
        span.style.display = "inline"
        let bienvenida = document.querySelector(".bienvenida")
        let personajes = document.querySelector(".personajes")
        span.addEventListener("click", function () {
            bienvenida.style.display = "none";
            personajes.style.display = "block";

        let bart = document.querySelector("#bart");  
        let lisa = document.querySelector("#lisa");   
        let homero =  document.querySelector("#homero");  
        let Marge =  document.querySelector("#marge"); 
        let Maggie =  document.querySelector("#maggie");  
        let Milhouse =  document.querySelector("#milhouse");  
        let SrBurns = document.querySelector("#burns");  
        let Bob =  document.querySelector("#bobPatino");  
        let Ned =  document.querySelector("#flanders");  
        let Buffman = document.querySelector("#duffman");  
        let Jefe =  document.querySelector("#gorgory");   
        let Nelson =  document.querySelector("#nelson");   
        
        bart.addEventListener("click", function () {})
        lisa.addEventListener("click", function () {})
        homero.addEventListener("click", function () {})
        Marge.addEventListener("click", function () {})
        Maggie.addEventListener("click", function () {})
        Milhouse.addEventListener("click", function () {})
        SrBurns.addEventListener("click", function () {})
        Bob.addEventListener("click", function () {})
        Ned.addEventListener("click", function () {})
        Buffman.addEventListener("click", function () {})
        Jefe.addEventListener("click", function () {})
        Nelson.addEventListener("click", function () {})




        })
    })




    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */


    /* Asignarle evento a la variable boton */
    // let boton = ;


})