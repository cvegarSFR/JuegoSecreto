let numeroSecreto = 0;
let intentos = 0;
let listaNumero

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML  = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
        
        console.log(intentos);
        if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        // El usuario no acerto
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento(`p`,`El numero es menor`);
        } else {
            asignarTextoElemento(`p`,`El numero es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = ``;
    }

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1
}

function condicionesIniciales () {
    asignarTextoElemento(`h1`,`Juego del número secreto. By CVR!`);
    asignarTextoElemento(`p`,`Indica un número del 1 al 10`); 
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}   

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Iniciarlizar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);

}

condicionesIniciales(); 