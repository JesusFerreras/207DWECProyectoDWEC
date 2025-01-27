mostrarImagen();


async function mostrarImagen() {
    try {
        let salida = document.getElementById("imagen");
        let respuesta = await fetch("https://picsum.photos/200/300");
        
        if (respuesta.ok) {
            salida.setAttribute("src", URL.createObjectURL(await respuesta.blob()));
            salida.setAttribute("alt", respuesta.status);
        }
    } catch (error) {
        console.log(error.message);
    }
}