function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    try {
        if (!/^[A-Z][a-z]*(\s[a-zA-Z][a-z]*)*$/.test(nombre)) {
            throw ("Cada nombre debe empezar por mayúscula y solo debe contener letras");
        }
        if (!/.{3,}/.test(nombre)) {
            throw ("El nombre debe contener 3 caracteres o más");
        }
        alert("Nombre válido");
    }
    catch (error) {
        alert(error);
    }
}

function validarApellidos() {
    var apellidos = document.getElementById("apellidos").value;
    try {
        if (!/^[A-Z][a-z]*(-[A-Z][a-z]*)?(\s[A-Z][a-z]*(-[A-Z][a-z]*)?)*$/.test(apellidos)) {
            throw ("Cada apellido debe empezar por mayúscula y solo debe contener letras");
        }
        if (!/.{2,}/.test(apellidos)) {
            throw ("Los apellidos debe contener 2 caracteres o más");
        }
        alert("Apellidos válidos");
    }
    catch (error) {
        alert(error);
    }
}

function validarDireccion() {
    var direccion = document.getElementById("direccion").value.split(",");
    try {
        if (direccion.length != 4) {
            throw ("La direccion debe tener el formato Calle,Número,Piso,Letra");
        }
        if (!/^C\/[A-Z][a-z]*(\s[a-z]+){0,3}$/.test(direccion[0])) {
            throw ("La calle debe tener el formato C/#####");
        }
        if (!/^\d+$/.test(direccion[1])) {
            throw ("El número solo debe contener cifras");
        }
        if (!/^\d+º$/.test(direccion[2])) {
            throw ("El piso debe tener el formato ##º");
        }
        if (!/^[A-Z]$/.test(direccion[3])) {
            throw ("La letra debe ser una única letra mayúscula");
        }
        alert("Direccion válida");
    }
    catch (error) {
        alert(error);
    }
}

function validarTlfno() {
    var tlfno = document.getElementById("tlfno").value;
    try {
        if (!/^\d{3}-\d{3}-\d{3}$/.test(tlfno)) {
            throw ("El teléfono debe tener el formato ###-###-###");
        }
        alert("Teléfono válido");
    }
    catch (error) {
        alert(error);
    }
}