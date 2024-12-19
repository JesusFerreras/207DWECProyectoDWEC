function funcion() {
    var obj1 = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
        }
    };

    var obj2 = Object.assign({}, obj1);
    alert(obj2.c.d);    
}

funcion();