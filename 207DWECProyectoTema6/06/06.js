document.getElementById("btnActual").addEventListener("click", () => {
    mostrarActual(document.getElementById("resultado"));
});

document.getElementById("btnPrevision").addEventListener("click", () => {
    mostrarPrevision(document.getElementById("resultado"));
});


async function mostrarActual(salida) {
    let respuesta = await fetch("https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=42.597278&lon=-5.56914&timezone=auto&language=es&units=metric", {
        method: 'GET'
    });
    if (!respuesta.ok) {
        salida.innerHTML = respuesta.status;
    } else {
        salida.innerHTML = respuesta;
    }
}

async function mostrarPrevision(salida) {
    let respuesta = await fetch("https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=42.597278&lon=-5.56914&timezone=auto&language=es&units=metric", {
        method: 'GET'
    });
    if (!respuesta.ok) {
        salida.innerHTML = respuesta.status;
    } else {
        salida.innerHTML = respuesta;
    }
}