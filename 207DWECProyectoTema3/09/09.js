var nCiclo = 0;
var intervalo;

function pasar() {
    parar();
    setTimeout(cambioColor, 500);
}

function continuar() {
    intervalo = setInterval(cambioColor, 1500);
}

function parar() {
    clearInterval(intervalo);
}

function cambioColor() {
    switch (nCiclo) {
        case 0 :
            document.getElementById("rojo").style.backgroundColor = "#FF0000";
            document.getElementById("verde").style.backgroundColor = "#008000";
            break;
        case 1 :
            document.getElementById("rojo").style.backgroundColor = "#800000";
            document.getElementById("amarillo").style.backgroundColor = "#FFFF00";
            break;
        case 2 :
            document.getElementById("amarillo").style.backgroundColor = "#808000";
            document.getElementById("verde").style.backgroundColor = "#00FF00";
            break;
        default :
            document.getElementById("rojo").style.backgroundColor="black";
            document.getElementById("amarillo").style.backgroundColor="black";
            document.getElementById("verde").style.backgroundColor="black";
    }

    nCiclo = (nCiclo + 1) % 3;
}