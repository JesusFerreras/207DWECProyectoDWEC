mostrar();

document.getElementById("seleccion").addEventListener("change", mostrar);

for (let input of document.getElementsByTagName("input")) {
    if (input.type == "password") {
        input.addEventListener("input", resaltarC);
    } else if (input.type == "text") {
        input.addEventListener("focusout", resaltar);
    }
}

function mostrar() {
    if (document.getElementById("radio1").checked) {
        document.getElementById("incidencias").classList.remove("oculto");
        document.getElementById("cambio").classList.add("oculto");
    } else if (document.getElementById("radio2").checked) {
        document.getElementById("cambio").classList.remove("oculto");
        document.getElementById("incidencias").classList.add("oculto");
    }
}

function resaltar() {
    if (this.value == "") {
        this.style.border = "1px solid red";
    } else {
        this.style.removeProperty("border");
    }
}

function resaltarC() {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)/.test(this.value)) {
        this.style.border = "1px solid red";
    } else {
        this.style.removeProperty("border");
    }
}