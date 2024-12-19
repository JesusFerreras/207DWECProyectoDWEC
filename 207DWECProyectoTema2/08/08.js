function funcion() {
    do {
        var x = prompt("Introduzca número");
/*
        var texto = "Divisible por";
        while (x<1 || x>300) {
            x = prompt("El número debe estar entre 1 y 300");
        }

        for (var i = 2; i < x/2 +1; i++) {
            if (x%i == 0) {
                texto += " " + i;
            }
        }

        alert(texto);
*/
        funcion2(x);
    } while (confirm("¿Continuar?"));
}

function funcion2(x) {
    var i = 2;
    var texto = x + "=";
    while (x > 1 && x >= i*i) {
        if (x%i == 0) {
            texto += i + "*";
            x /= i;
        } else {
            i++;
        }
    }
    texto += x;
    alert(texto);
}

funcion();