document.getElementById("codigo").textContent = Math.floor(Math.random() * 1000000);

colocarNums();

document.getElementById("validar").addEventListener("click", validar);
document.getElementById("reiniciar").addEventListener("click", reiniciar);


function anadirNum() {
    if (document.getElementById("texto").value.length < 6) {
        document.getElementById("texto").value += this.textContent;
    }
}

function validar() {
    if (document.getElementById("texto").value == document.getElementById("codigo").textContent) {
        document.getElementById("resultado").textContent = "Clave correcta";
    } else {
        document.getElementById("resultado").textContent = "Clave incorrecta";
        colocarNums();
    }
}

function reiniciar() {
    document.getElementById("texto").value = "";
    document.getElementById("codigo").textContent = Math.floor(Math.random() * 1000000);
    colocarNums();
}

function colocarNums() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.getElementById("teclado").innerHTML = "";

    while (nums.length != 0) {
        let n = nums.splice(Math.floor(Math.random() * nums.length), 1);

        eval('var div' + n + ' = document.createElement("div");');
        eval('div' + n + '.addEventListener("click", anadirNum);');
        eval('div' + n + '.id = "div' + n + '";');
        eval('div' + n + '.textContent = ' + n + ';');
        eval('document.getElementById("teclado").appendChild(div' + n + ');');
    }
}