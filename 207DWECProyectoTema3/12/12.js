/*
function compararPares(a,b) {
    return Math.abs((a-1)%4-1) - Math.abs((b-1)%4-1);
}

function compararImpares(a,b) {
    return Math.abs(a%4-1) - Math.abs(b%4-1);
}

function mostrar() {
    let num = document.getElementById("num").value;
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(parseInt(Math.random()*100));
    }

    switch (document.getElementById("seleccion").value) {
        case ("par") :
            document.getElementById("resultado").innerHTML = array.sort(compararPares).join(",");
        break;
        case ("impar") :
            document.getElementById("resultado").innerHTML = array.sort(compararImpares).join(",");
        break;
        default :
            document.getElementById("resultado").innerHTML = "Error";
        break;
    }
}
*/

function mostrar() {
    let num = document.getElementById("num").value;
    let arrayP = [];
    let arrayI = [];
    let arrayT = [];
    for (let i = 0; i < num; i++) {
        let x = parseInt(Math.random()*100);
        if (x%2 == 0) {
            arrayP.push(x);
        } else {
            arrayI.push(x);
        }
    }

    switch (document.getElementById("seleccion").value) {
        case ("par") :
            arrayT = arrayP.splice(0, arrayP.length/2 + 1);
            document.getElementById("resultado").innerHTML = arrayT.concat(arrayI.concat(arrayP)).join(",");
        break;
        case ("impar") :
            arrayT = arrayI.splice(0, arrayI.length/2 + 1);
            document.getElementById("resultado").innerHTML = arrayT.concat(arrayP.concat(arrayI)).join(",");
        break;
        default :
            document.getElementById("resultado").innerHTML = "Error";
        break;
    }
}