var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var btnTres = document.querySelector('#btnTres');
var btnCuatro = document.querySelector('#btnCuatro');

btnUno.addEventListener('click', ejemplo1);
btnDos.addEventListener('click', ejemplo2);
btnTres.addEventListener('click', ejemplo3);
btnCuatro.addEventListener('click', ejemplo4);

var numero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');

var opciones = document.querySelector('#opciones');


function ejemplo1() {
    var fin = Number(numero.value);

    for(var i = 0; i<= fin; i++) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
    }
}

function ejemplo2() {
    var fin = Number(numero.value);

    for(var i = 1; i <=fin; i++) {
        var valor = prompt("Ingresa un número " + i  + ":");
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = valor;
    }
}

function ejemplo3() {
    var fin = Number(numero.value);

    var i = 0;
    while(i <fin) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
    }
}

function ejemplo4() {
    var fin = Number(numero.value);

    var i = fin;
    while(i>0) {
        var opc = document.createElement('option')
        opc.text = i;
        opciones.add(opc);

        i--;
    }
}
