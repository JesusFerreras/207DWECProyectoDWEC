function repetir(str, n) {
    let txt = "";
    for (let i = 0; i < n; i++) {
        txt += str;
    }
    return txt;
}

function mostrar() {
    let txt = "";
    let str = "*";
    let array = eval("[" + document.getElementById("texto").value + "];");

    switch (document.getElementById("seleccion").value) {
        case ("for") :
            for (let i = 0; i < array.length; i++) {
                txt += repetir(str, array[i]) + "<br>";
            }
        break;
        case ("forin") :
            for (let i in array) {
                txt += repetir(str, array[i]) + "<br>";
            }
        break;
        case ("forof") :
            for (let i of array) {
                txt += repetir(str, i) + "<br>";
            }
        break;
        case ("foreach") :
            array.forEach(i => {
                txt += repetir(str, i) + "<br>";
            });
        break;
        case ("map") :
            txt = array.map(i => repetir(str, i)).join("<br>");
        break;
        default :
            txt = "Error";
        break;
    }

    document.getElementById("resultado").innerHTML = txt;
}