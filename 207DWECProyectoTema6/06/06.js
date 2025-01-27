document.getElementById("btnActual").addEventListener("click", () => {
    mostrarActual(document.getElementById("resultado"));
});

document.getElementById("btnPrevision").addEventListener("click", () => {
    mostrarPrevision(document.getElementById("resultado"));
});


async function mostrarActual(salida) {
    try {
        let respuesta = await fetch("https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=42.597278&lon=-5.56914&timezone=auto&language=es&units=metric", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bf1d752b5msha306d71de345c17p1e95e0jsn7ceac53ed12f',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        });
        if (!respuesta.ok) {
            salida.innerHTML = respuesta.status;
        } else {
            json = await respuesta.json();

            salida.innerHTML = 
                "Latitud: " + json.lat + "<br>" +
                "Longitud: " + json.lon + "<br>" +
                "Tiempo: " + json.daily.data[0].summary + "<br>" +
                "Temperatura: " + json.daily.data[0].temperature + "<br>" +
                "Sensación térmica: " + json.daily.data[0].feels_like+ "<br>" +
                "Viento: { Velocidad: " + json.daily.data[0].wind.speed + ", Dirección: " + json.daily.data[0].wind.dir + "}<br>" +
                "Nubosidad: " + json.daily.data[0].cloud_cover + "<br>" +
                "Humedad: " + json.daily.data[0].humidity
            ;
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function mostrarPrevision(salida) {
    try {
        let respuesta = await fetch("https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=42.597278&lon=-5.56914&timezone=auto&language=es&units=metric", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bf1d752b5msha306d71de345c17p1e95e0jsn7ceac53ed12f',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        });
        if (!respuesta.ok) {
            salida.innerHTML = respuesta.status;
        } else {
            json = await respuesta.json();

            salida.innerHTML = 
                "Latitud: " + json.lat + "<br>" +
                "Longitud: " + json.lon + "<br>" +
                "Tiempo: " + json.daily.data[1].summary + "<br>" +
                "Temperatura: " + json.daily.data[1].temperature + "<br>" +
                "Sensación térmica: " + json.daily.data[1].feels_like+ "<br>" +
                "Viento: { Velocidad: " + json.daily.data[1].wind.speed + ", Dirección: " + json.daily.data[1].wind.dir + "}<br>" +
                "Nubosidad: " + json.daily.data[1].cloud_cover + "<br>" +
                "Humedad: " + json.daily.data[1].humidity
            ;
        }
    } catch (error) {
        console.log(error.message);
    }
}