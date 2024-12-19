function funcion(x) {
    if (x == 0) {
        alert(0);
    } else {
        throw x+1;
    }
}

function diHola() {
    var x = prompt();
    
    try {
        funcion(x)
    } catch(error) {
        alert(error);
        console.log(error);
    }
}
diHola();