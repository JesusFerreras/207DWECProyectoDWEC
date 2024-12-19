function funcion2(x) {
    var y = prompt();
    
    if (x == y) {
        alert("correcto");
    } else {
        throw "error";
    }
}

function funcion1() {
    var x = prompt();
    
    try {
        funcion2(x)
    } catch(error) {
        alert(error);
    }
}
funcion1();