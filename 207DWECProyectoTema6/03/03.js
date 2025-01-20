document.getElementById("btnJson").addEventListener("click", () => {
    mostrarJson(document.getElementById("resultado"));
});

document.getElementById("btnTexto").addEventListener("click", () => {
    mostrarTexto(document.getElementById("resultado"));
});

cambiarEstilos();


async function mostrarJson(elemento) {
    try {
        let respuesta = await fetch("https://randomuser.me/api/?results=3");
        if (!respuesta.ok) {
            throw new Error(respuesta.status);
        }

        let json = await respuesta.json();
        
        elemento.textContent = JSON.stringify(json);
    } catch (error) {
        elemento.textContent = error.message;
    }
}

async function mostrarTexto(elemento) {
    try {
        let respuesta = await fetch("https://randomuser.me/api/?results=3");
        if (!respuesta.ok) {
            throw new Error(respuesta.status);
        }

        let texto = await respuesta.text();
        elemento.textContent = texto;
    } catch (error) {
        elemento.textContent = error.message;
    }
}

async function cambiarEstilos() {
    try {
        let respuestaH = await fetch("./header.txt");
        let respuestaF = await fetch("./footer.txt");
        if (!respuestaH.ok) {
            throw new Error(respuestaH.status);
        }
        if (!respuestaF.ok) {
            throw new Error(respuestaF.status);
        }

        let headers = document.getElementsByTagName("header");
        let footers = document.getElementsByTagName("footer");
        for (let elemento of headers) {
            elemento.setAttribute("style", await respuestaH.text());
        }
        for (let elemento of footers) {
            elemento.setAttribute("style", await respuestaF.text());
        }
    } catch (error) {
        console.log(error.message);
    }
}