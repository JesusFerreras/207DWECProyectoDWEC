let formulario = document.forms[0];

document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("ocultar").addEventListener("click", ocultar);

function mostrar() {
    if (formulario.classList.contains("oculto")) {
        formulario.classList.remove("oculto");
    } else {
        alert("El formulario ya se está mostrando");
    }
}

function ocultar() {
    if (formulario.classList.contains("oculto")) {
        alert("El formulario ya está oculto");
    } else {
        formulario.classList.add("oculto");
    }
}