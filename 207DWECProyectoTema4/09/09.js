function cambioDiv1() {
    document.getElementById("div1").setAttribute("style", "border: 2px solid " + generarColor());
}

function cambioP1() {
    document.getElementById("p1").setAttribute("style", "color:" + generarColor());
}

function cambioDiv2() {
    
}

function cambioP2() {

}

function cambioDiv3() {
    
}

function cambioP3() {

}

function generarColor() {
    return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}