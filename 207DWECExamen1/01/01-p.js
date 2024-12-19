//Se declara la variable ventana
let ventana = null;

//Crea el semaforo al hacer click en el boton crear
document.getElementById("crear").addEventListener("click", () => {
    //Se crea un elemento div con el id semaforo
    let semaforo = document.createElement("div");
    semaforo.setAttribute("id", "semaforo");

    //Se crea un elemento div con el id luzR y se anade como hijo a semaforo
    let rojo = document.createElement("div");
    rojo.setAttribute("id", "luzR");
    semaforo.appendChild(rojo);

    //Se crea un elemento div con el id luzY y se anade como hijo a semaforo
    let amarillo = document.createElement("div");
    amarillo.setAttribute("id", "luzY");
    semaforo.appendChild(amarillo);

    //Se crea un elemento div con el id luzG y se anade como hijo a semaforo
    let verde = document.createElement("div");
    verde.setAttribute("id", "luzG");
    semaforo.appendChild(verde);

    //Se anade el elemento semaforo al cuerpo del html detras del primer h1
    document.body.appendChild(semaforo);
    document.getElementsByTagName("h1")[0].after(semaforo);
});

//Ejecuta alumbrarG al hacer click en el boton btnG
document.getElementById("btnG").addEventListener("click", alumbrarG);

//Ejecuta alumbrarY al hacer click en el boton btnY
document.getElementById("btnY").addEventListener("click", alumbrarY);

//Ejecuta alumbrarR al hacer click en el boton btnR
document.getElementById("btnR").addEventListener("click", alumbrarR);

//Abre una nueva ventana al hacer click en el boton abrir
document.getElementById("abrir").addEventListener("click", () => {
    ventana = window.open("01-h.html");
});

//Cierra la ventana nueva si existe al hacer click en el boton cerrar
document.getElementById("cerrar").addEventListener("click", () => {
    if (ventana != null) {
        ventana.close();
        ventana = null;
    }
});


//Resalta el color verde del semaforo
function alumbrarG() {
    //Si el valor del campo contrasena es valido
    if (/\w{3,6}[@#~%&/$]\w{3,6}/.test(document.getElementById("contrasena").value)) {
        //Se aclara el color de luzG y se oscurece el resto
        document.getElementById("luzR").style.backgroundColor = "#800000";
        document.getElementById("luzY").style.backgroundColor = "#808000";
        document.getElementById("luzG").style.backgroundColor = "#00FF00";
    } else {
        alert("Contraseña incorrecta");
    }

}

//Resalta el color amarillo del semaforo
function alumbrarY() {
    //Si el valor del campo contrasena es valido
    if (/\w{3,6}[@#~%&/$]\w{3,6}/.test(document.getElementById("contrasena").value)) {
        //Se aclara el color de luzY y se oscurece el resto
        document.getElementById("luzR").style.backgroundColor = "#800000";
        document.getElementById("luzY").style.backgroundColor = "#FFFF00";
        document.getElementById("luzG").style.backgroundColor = "#008000";
    } else {
        alert("Contraseña incorrecta");
    }
}

//Resalta el color rojo del semaforo
function alumbrarR() {
    //Si el valor del campo contrasena es valido
    if (/\w{3,6}[@#~%&/$]\w{3,6}/.test(document.getElementById("contrasena").value)) {
        //Se aclara el color de luzR y se oscurece el resto
        document.getElementById("luzR").style.backgroundColor = "#FF0000";
        document.getElementById("luzY").style.backgroundColor = "#808000";
        document.getElementById("luzG").style.backgroundColor = "#008000";
    } else {
        alert("Contraseña incorrecta");
    }
}

