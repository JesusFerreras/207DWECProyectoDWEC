mostrarDatos();


async function mostrarDatos() {
    let salida = document.getElementById("datos");
    let respuesta = await fetch("04.txt");
    if (!respuesta.ok) {
        salida.textContent = respuesta.status;
    } else {
        let json = await respuesta.json();
        for (let elemento of json) {
            if (elemento.tipo == "dni") {
                salida.innerHTML += "El DNI solicitado es: " + elemento.numero + "<br>";
            }
        }
    }
}