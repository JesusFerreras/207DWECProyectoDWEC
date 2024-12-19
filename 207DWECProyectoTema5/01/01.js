anadirEvento(document.getElementById("div1"), 0);
anadirEvento(document.getElementById("div2"), 1);
anadirEvento(document.getElementById("div3"), 2);
document.getElementById("activar").addEventListener("click", activar);
document.getElementById("desactivar").addEventListener("click", desactivar);

function mostrar() {
    alert(this.id);
}

function mostrarR() {
    alert(this.id);
    this.removeEventListener("click", mostrarR, false);
}

function activar() {
    document.getElementById("b01").addEventListener("click", mostrar);
    document.getElementById("b02").addEventListener("click", mostrar);
    document.getElementById("b03").addEventListener("click", mostrar);
}

function desactivar() {
    document.getElementById("b01").removeEventListener("click", mostrar);
    document.getElementById("b02").removeEventListener("click", mostrar);
    document.getElementById("b03").removeEventListener("click", mostrar);
}

function anadirEvento(elemento, tipo) {
    switch (tipo) {
        case 0:
            elemento.addEventListener("click", mostrar, false);
        break;
        case 1:
            elemento.addEventListener("click", mostrar, true);
        break;
        case 2:
            elemento.addEventListener("click", mostrarR, false);
        break;
    }
    if (elemento.hasChildNodes) {
        for (let hijo of elemento.childNodes) {
            anadirEvento(hijo, tipo);
        }
    }
}