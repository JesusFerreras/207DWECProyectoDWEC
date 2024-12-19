function tagTextContent() {
    var elementos = document.getElementsByTagName("p");
    for (let x of elementos) {
        x.textContent = document.getElementById("texto").value;
    }
}

function tagInnerHTML() {
    var elementos = document.getElementsByTagName("p");
    for (let x of elementos) {
        x.innerHTML = document.getElementById("texto").value;
    }
}

function tagInnerText() {
    var elementos = document.getElementsByTagName("p");
    for (let x of elementos) {
        x.innerText = document.getElementById("texto").value;
    }
}

function idTextContent() {
    document.getElementById("p").textContent = document.getElementById("texto").value;
}

function idInnerHTML() {
    document.getElementById("p").innerHTML = document.getElementById("texto").value;
}

function idInnerText() {
    document.getElementById("p").innerText = document.getElementById("texto").value;
}