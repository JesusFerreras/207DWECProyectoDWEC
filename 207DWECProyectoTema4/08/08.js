function crearFormulario() {
    document.getElementById("btn").style.display = "none";

    let formulario = document.createElement("form");
    formulario.setAttribute("action", "#");

    let nombre = document.createElement("input");
    nombre.setAttribute("type", "text");
    nombre.setAttribute("placeholder", "Nombre");

    let apellidos = document.createElement("input");
    apellidos.setAttribute("type", "text");
    apellidos.setAttribute("placeholder", "Apellidos");

    let email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("placeholder", "Email");

    let asunto = document.createElement("input");
    asunto.setAttribute("type", "text");
    asunto.setAttribute("placeholder", "Asunto");

    let mensaje = document.createElement("textarea");
    mensaje.setAttribute("placeholder", "Mensaje");

    let boton = document.createElement("input");
    boton.setAttribute("type", "button");
    boton.setAttribute("value", "Enviar");
    boton.setAttribute("onclick", "alert('Enviado')");

    document.body.appendChild(formulario);
    formulario.appendChild(nombre);
    formulario.appendChild(apellidos);
    formulario.appendChild(email);
    formulario.appendChild(asunto);
    formulario.appendChild(mensaje);
    formulario.appendChild(boton);
}