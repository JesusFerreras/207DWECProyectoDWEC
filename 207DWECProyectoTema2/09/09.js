function funcion() {
    do {
        var x = Math.ceil(Math.random() * 10);
        console.log(x);
        if (parseInt(prompt("Introduzca número (1-10)")) == x) {
            alert("Correcto");
        } else {
            alert("Incorrecto");
        }
    } while (confirm("¿Continuar?"));
}
funcion();