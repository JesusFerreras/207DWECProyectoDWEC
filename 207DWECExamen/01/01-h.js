//Cambia el color del semaforo en la ventana padre al hacer click en el boton cambiar
document.getElementById("cambiar").addEventListener("click", () => {
    switch (document.getElementById("color").value) {
        case "Verde", "verde":
            //Se avisa del cambio y se ejecuta la funcion alumbrarG de la ventana padre
            alert("Verde");
            window.opener.alumbrarG();
        break;
        case "Amarillo", "amarillo":
            //Se avisa del cambio y se ejecuta la funcion alumbrarY de la ventana padre
            alert("Amarillo");
            window.opener.alumbrarY();
        break;
        case "Rojo", "rojo":
            //Se avisa del cambio y se ejecuta la funcion alumbrarR de la ventana padre
            alert("Rojo");
            window.opener.alumbrarR();
        break;
        default:
            //Se avisa de que el color no es valido en la ventana padre
            window.opener.alert("Color no válido");
        break;
    }
});