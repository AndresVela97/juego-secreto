let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElementos(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElementos('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto ) {
            asignarTextoElementos('p','el numero secreto es menor');
        }else{
            asignarTextoElementos('p','el numero secreto es mayor');
        }
       intentos++;
       limpiarCaja();
    }
    return ;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value ='';
}

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElementos('p','ya se sortearon los numeros posibles');
   }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
       }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }
   }
}

function condicionesIniciales() {
    asignarTextoElementos('h1','Juego del numero secreto!');
    asignarTextoElementos('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de numeroSecreto
    //generar numero aleatoreo
    //inicializar numero de intentos
    condicionesIniciales();
    //desabilitar boton de nuevo Juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

