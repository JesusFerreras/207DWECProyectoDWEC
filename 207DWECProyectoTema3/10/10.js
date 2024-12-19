var obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    },
    f: [5, 6]
};

function mostrar(o) {
    let txt = "";
    
    for (let x in o) {
        if (o[x] instanceof Object && !(o[x] instanceof Function)) {
            txt += x + ": {\n" + mostrar(o[x]) + "}\n";
        } else {
            txt += x + ": " + o[x] + "\n";
        }
    }
    
    return txt;
}