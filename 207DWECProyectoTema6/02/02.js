function crearTemporizador(tiempo) {
    let promesa = new Promise((resolver, rechazar) => {
        setTimeout(() => {
            clearTimeout(temporizador);
            resolver("Your time is out");
        }, tiempo);

        let temporizador = setTimeout(() => {
            rechazar("Something was wrong");
        }, tiempo*2);
    });

    return promesa
}

export async function cuentaAtras(inicio, elemento, intervalo) {
    for (let i = inicio; i > 0; i--) {
        await crearTemporizador(intervalo);
        elemento.textContent = i;
    }

    crearTemporizador(intervalo)
        .then((respuesta) => {
            elemento.textContent = respuesta;
        })
        .catch((error) => {
            elemento.textContent = error;
        })
    ;
}