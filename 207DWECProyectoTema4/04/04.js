document.getElementById("p1").innerHTML = "window.location.href = " + window.location.href;
document.getElementById("p2").innerHTML = "window.location.hostname = " + window.location.hostname;
document.getElementById("p3").innerHTML = "window.location.pathname = " + window.location.pathname;
document.getElementById("p4").innerHTML = "window.location.protocol = " + window.location.protocol;
document.getElementById("p5").innerHTML = "window.location.port = " + window.location.port;

function abrirAssing() {
    window.location.assign(document.getElementById("url").value);
}

function abrirReplace() {
    window.location.replace(document.getElementById("url").value);
}