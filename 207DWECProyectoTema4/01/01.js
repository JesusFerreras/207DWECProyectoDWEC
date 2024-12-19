let ventana;

function abrir() {
    ventana = window.open("https://google.es", "ventana", "resizable, left=100, top=100, width=500, height=500");
}

function cerrar() {
    ventana.close();
}

function alturaE() {
    document.getElementById("he").innerHTML = window.outerHeight;
}

function alturaI() {
    document.getElementById("hi").innerHTML = window.innerHeight;
}

function anchoE() {
    document.getElementById("we").innerHTML = window.outerWidth;
}

function anchoI() {
    document.getElementById("wi").innerHTML = window.innerWidth;
}