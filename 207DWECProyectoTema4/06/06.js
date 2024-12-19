function mostrarUno() {
    let txt = "";
    let nodo = document.getElementById("p1");
    txt += "nodeType: " + nodo.nodeType + "<br>";
    txt += "nodeName: " + nodo.nodeName + "<br>";
    txt += "nodeValue: " + nodo.childNodes[0].nodeValue + "<br>";
    document.getElementById("resultado").innerHTML = txt;
}

function mostrarTodos() {
    let txt = "";
    let nodos = document.getElementsByTagName("p");
    for (let nodo of nodos) {
        txt += "nodeType: " + nodo.nodeType + "<br>";
        txt += "nodeName: " + nodo.nodeName + "<br>";
        txt += "nodeValue: " + nodo.childNodes[0].nodeValue + "<br><br>";
    }
    document.getElementById("resultado").innerHTML = txt;
}