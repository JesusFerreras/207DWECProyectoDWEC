let salida = document.getElementById("salida");

document.getElementById("grabarCookie").addEventListener("click", () => {
    setCookie(document.getElementById("claveValor").value, document.getElementById("dias").value);
});

document.getElementById("verCookies").addEventListener("click", () => {
    salida.innerText = document.cookie;
});

document.getElementById("verCookieDecodificada").addEventListener("click", () => {
    let texto = document.getElementById("claveValor").value;
    if (/^[^=]+=[^=]+$/.test(texto)) {
        let clave = texto.split("=")[0];
        
        salida.innerText = clave + "=" + getCookie(clave);
    }
});


function setCookie(texto, dias) {
    if (/^[^=]+=[^=]+$/.test(texto) && dias > 0) {
        let claveValor = texto.split("=");
        let fechaActual = new Date();
        fechaActual.setTime(fechaActual.getTime() + (dias * 24 * 60 * 60 * 1000));

        let fechaExpiracion = "expires=" + fechaActual.toUTCString();
        document.cookie = claveValor[0] + "=" + claveValor[1] + ";" + fechaExpiracion + ";path=/";
    }
}

function getCookie(clave) {
    let nombre = clave + "=";
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}