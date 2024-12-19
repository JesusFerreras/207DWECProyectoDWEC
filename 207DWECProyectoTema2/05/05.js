function practica05(x) {
    if (x == 0) {
        alert("Opcion valida");
    } else {
        alert(document.getElementById("01").innerHTML);
    }

    try {
        f();
    } catch (error) {
        alert(error);
    }
}