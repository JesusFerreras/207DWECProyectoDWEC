function generarNum() {
    let nNum = 16;
    let txt = "";
    let sum = (parseInt(Math.random()*13) + 1) * 10;
    let arrayNum = [];
    for (let i = 0; i < nNum; i++) {
        arrayNum[i] = 0;
    }

    while (sum > 0) {
        let rand = Math.random();
        for (let i = 0; i < nNum; i++) {
            if (arrayNum[i] < 9 && rand < ((i+1) / nNum)) {
                arrayNum[i]++;
                sum--;
                break;
            }
        }
    }
    
    arrayNum = arrayNum.map((n, i) => {
        if (i%2 == 1) {
            return n;
        } else {
            if (n%2 == 1) {
                return (n+9)/2;
            } else {
                return n/2;
            }
        }
    });

    for (let x in arrayNum) {
        txt += arrayNum[x];
        if (x%4 == 3) {
            txt += " ";
        }
    }

    document.getElementById("numG").value = txt.trim();
}

function comprobarNum() {
    let sum = 0;
    let arrayNum = document.getElementById("numC").value.replaceAll(" ", "").split("");
    let valido = true;
    
    if (arrayNum.length != 16 || arrayNum.includes(NaN)) {
        valido = false;
    } else {
        for (let i in arrayNum) {
            if (i%2 == 1) {
                sum += Number(arrayNum[i]);
            } else {
                if (Number(arrayNum[i])*2 > 9) {
                    sum += Number(arrayNum[i])*2 - 9;
                } else {
                    sum += Number(arrayNum[i])*2;
                }
            }
        }
    }
    
    if (!valido || sum%10 != 0) {
        document.getElementById("comprobacion").innerHTML = "Número no válido";
    } else {
        document.getElementById("comprobacion").innerHTML = "Número válido";
    }
}