document.getElementById("div0").addEventListener("mousemove", (evento) => {
    document.getElementById("div01").style.top = evento.clientY + "px";
    document.getElementById("div01").style.left = evento.clientX + "px";
});

window.addEventListener("keydown", (evento) => {
    if (evento.ctrlKey && evento.key == "y") {
        document.getElementById("div0").style.borderColor = generarColor();
    }
});

function generarColor() {
    return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}