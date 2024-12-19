function mostrar() {
    let txt = "";
    let arrayTxt = document.getElementById("texto").value.split("");
    console.log(arrayTxt);
    let mapTxt = new Map();
    for (let x of arrayTxt) {
        if (mapTxt.has(x)) {
            mapTxt.set(x, mapTxt.get(x)+1);
        } else {
            mapTxt.set(x, 1);
        }
    }
    mapTxt.forEach((valor, clave) => {
        txt += "[" + clave + "] -> " + valor + " apariciones<br>";
    });
    document.getElementById("resultado").innerHTML = txt;
}