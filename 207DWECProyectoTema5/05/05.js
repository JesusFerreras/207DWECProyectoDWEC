let movil = document.createElement("div");
movil.setAttribute("id", "movil");
movil.setAttribute("draggable", "true");
document.getElementById("div0").appendChild(movil);

document.getElementById("contenedor").addEventListener("dragover", (evento) => {
    evento.preventDefault();
    evento.target.style.backgroundColor = "#dddddd";
});

document.getElementById("contenedor").addEventListener("dragleave", (evento) => {
    evento.target.style.backgroundColor = "#ffffff";
});

document.getElementById("contenedor").addEventListener("drop", (evento) => {
    evento.target.appendChild(movil);
});