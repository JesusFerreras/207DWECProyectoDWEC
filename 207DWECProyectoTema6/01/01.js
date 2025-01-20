let resultado = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", () => {
    crearPromesa()
        .then((respuesta) => {
            resultado.textContent = respuesta;
        })
        .catch((error) => {
            resultado.textContent = error;
        })
    ;
});


function crearPromesa() {
    let tiempo1 = document.getElementById("tiempo1").value;
    let tiempo2 = document.getElementById("tiempo2").value;
    let inicio = Date.now();

    let promesa = new Promise((resolver, rechazar) => {
        setTimeout(() => {
            let final = Date.now();
            
            if (final-inicio <= tiempo1*2) {
                resolver("Tiempo transcurrido: " + (final-inicio));
            } else {
                rechazar("Something was wrong");
            }
        }, Number(tiempo1) + Number(tiempo2));
    });

    return promesa
}