function buscar() {
    let n = [...document.getElementById("texto").value.matchAll(document.getElementById("busqueda").value)];
    document.getElementById("rBusqueda").innerHTML = "Hay " + n.length + " coincidencias";
}

function mostrar() {
    let arrayTxt = document.getElementById("texto").value.split(/[\s\.,¿?¡!;:]+/g);
    switch (document.getElementById("seleccion").value) {
        case ("orden") :
            document.getElementById("rMuestra").innerHTML = arrayTxt.sort((a, b) => a.localeCompare(b));
        break;
        case ("normal") :
            document.getElementById("rMuestra").innerHTML = arrayTxt;
        break;
        default :
            document.getElementById("rMuestra").innerHTML = "Error";
        break;
    }
}