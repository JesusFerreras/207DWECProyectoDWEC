var personajesAnt, personajesSig, planetasAnt, planetasSig;

document.getElementById("btnPersonajes").addEventListener("click", () => {
    mostrarPersonajes("https://swapi.dev/api/people/", document.getElementById("personajes"));
});

document.getElementById("antPersonajes").addEventListener("click", () => {
    if (personajesAnt != null) {
        mostrarPersonajes(personajesAnt, document.getElementById("personajes"));
    }
});

document.getElementById("sigPersonajes").addEventListener("click", () => {
    if (personajesSig != null) {
        mostrarPersonajes(personajesSig, document.getElementById("personajes"));
    }
});

document.getElementById("btnPlanetas").addEventListener("click", () => {
    mostrarPlanetas("https://swapi.dev/api/planets/", document.getElementById("planetas"));
});

document.getElementById("antPlanetas").addEventListener("click", () => {
    if (planetasAnt != null) {
        mostrarPlanetas(planetasAnt, document.getElementById("planetas"));
    }
});

document.getElementById("sigPlanetas").addEventListener("click", () => {
    if (planetasSig != null) {
        mostrarPlanetas(planetasSig, document.getElementById("planetas"));
    }
});


async function mostrarPersonajes(url, salida) {
    try {
        let request = new Request(url);
        
        let respuesta = await fetch(request);
        if (!respuesta.ok) {
            salida.textContent = respuesta.status;
        } else {
            let json = await respuesta.json();

            personajesAnt = json.previous;
            personajesSig = json.next;

            salida.innerHTML = "url: " + request.url + "<br>";
            for (let elemento of json.results) {
                salida.innerHTML += elemento.name + "<br>";
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function mostrarPlanetas(url, salida) {
    let request = new Request(url);
    
    let respuesta = await fetch(request);
    if (!respuesta.ok) {
        salida.textContent = respuesta.status;
    } else {
        let json = await respuesta.json();

        planetasAnt = json.previous;
        planetasSig = json.next;

        salida.innerHTML = "url: " + request.url + "<br>";
        for (let elemento of json.results) {
            salida.innerHTML += elemento.name + "<br>";
        }
    }
}