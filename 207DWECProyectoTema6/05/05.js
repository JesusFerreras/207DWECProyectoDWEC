mostrarImagen();


async function mostrarImagen() {
    let salida = document.getElementById("imagen");
    let respuesta = await fetch("https://source.unsplash.com/random");
    if (!respuesta.ok) {
        salida.setAttribute("alt", respuesta.status);
    } else {
        salida.setAttribute("src", URL.createObjectURL(await respuesta.blob()));
    }
}