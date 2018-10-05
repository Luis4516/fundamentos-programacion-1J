var pResultado = document.querySelector('#resultado')
var btnNumero = document.querySelector('#btnNumero');
btnNumero.addEventListener('click', evalNumero);

var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', evalOpcion);

var inputNumero = document.querySelector('#numero');

function evalOpcion() {
    var numero = Number(inputNumero.value);
    var opcion = opciones.value;

    if(opcion === 'mitad') {
        pResultado.textContent = 'La mitad es ' + (numero/2);
    }
    else if(opcion === 'cuadrado') {
        pResultado.textContent = 'El cuadrado es ' + (numero*numero);
    }
    else if(opcion === 'par') {
        if(numero%2 === 0) {
            pResultado.textContent = 'El numero es par ';
        }
        else {
            pResultado.textContent = 'El numero es impar ';
        }
    }
    else {
        pResultado.textContent = "";
    }

}

function evalNumero() {
    var numero = Number(inputNumero.value);

    if(numero > 0) {
        pResultado.textContent = 'El numero ' + numero + ' es positivo';
    }
    else if (numero <0) {
        pResultado.textContent = 'El numero ' + numero + ' es negativo';
    }
    else {
        pResultado.textContent = "Escribiste el numero cero";
    }
}