var t;

function mostrarFibonacci() {
    let n = document.getElementById("num").value;
    if (isNaN(n) || n < 0 || n%1 != 0) {
        alert ("Numero invalido");
    } else {
        t = Date.now();
        document.getElementById("fi").innerHTML = fibonacci(n) + "<br>" + (Date.now()-t) + "ms";
    }
}

function mostrarFactorial() {
    let n = document.getElementById("num").value;
    if (isNaN(n) || n < 0 || n%1 != 0) {
        alert ("Numero invalido");
    } else {
        t = Date.now();
        document.getElementById("fa").innerHTML = factorial(n) + "<br>" + (Date.now()-t) + "ms";
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}