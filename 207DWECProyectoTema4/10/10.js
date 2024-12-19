let ventana;

function abrir() {
    ventana = window.open("../09/09.html", "ventana", "resizable, left=100, top=100, width=500, height=500");
}

function mostrar() {
    document.getElementById("clases").innerText = ventana.document.getElementById("div1").classList[0];
}

function cambiar() {
    let botones = ventana.document.getElementsByTagName("button");
    for (let boton of botones) {
        boton.setAttribute("style", "border: 2px solid " + ventana.generarColor());
    }
}

function cerrar() {
    ventana.close();
}