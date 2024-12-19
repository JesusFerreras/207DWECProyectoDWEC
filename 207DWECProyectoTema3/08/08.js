function mostrar() {
    alert(eval("calcular(" + document.getElementById("num").value + ")"));
}

function calcular(...n) {
    let sum = 0;
    for (x of n) {
        sum += x;
    }
    return sum/n.length;
}