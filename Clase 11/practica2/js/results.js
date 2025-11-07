let searchResults = document.querySelector(".search-results")

let querystring = location.search
console.log(querystring);

let objquerystring = new URLSearchParams(querystring)

let results = objquerystring.get("form")


fetch(`https://rickandmortyapi.com/api/character/?name=${results}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);


        let form = document.querySelector(".search-results");
        let forms = ""
        for (let i = 0; i < data.results.length; i++) {
            forms = forms + `<article>
     <img src= ${data.results[i].image} alt=''>
          <a href="./detalle.html?id=${data.results[i].id}">Name: ${data.results[i].name} </a>
          <p>Status: ${data.results[i].status}  </p>
     </article>`
        }
        form.innerHTML = forms





    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


