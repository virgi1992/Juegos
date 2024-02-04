

//CONSTANTES
const generarNumeroAleatorio = () => Math.floor(Math.random()*101);
const numeroParaAcertar = generarNumeroAleatorio();
const noEsUnNumero = 0;
const elNumeroEsMayor = 2;
const elNumeroEsMenor = 1;
const esElNumeroSecreto = 3;
const gameOverMaximoDeIntentos = 4;
const maximoDeIntentos = 5; 

//VARIABLES
let numeroDeIntentos = 0;

//operación

console.log(numeroParaAcertar);

const hasSuperadoElNumeroMaximoDeIntentos = () =>{
   return numeroDeIntentos >= maximoDeIntentos;
}

const muestraNumeroDeIntentos = () =>{
    document.getElementById("intentos").innerHTML =`${numeroDeIntentos} de ${maximoDeIntentos}`;
}
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);


const gestionarGameOver = (juego) =>{
    if (juego === gameOverMaximoDeIntentos){
        document.getElementById("comprobar").disabled = true; 
    }
}

const muestraMensajeDeComprobacion = (text, estad) => {

    let mensaje = "";

    switch(estad){
        case noEsUnNumero:
            mensaje = `${text} NO es un numero, prueba otra vez`;
            break;
        case elNumeroEsMayor:
            mensaje = `${text} es MAYOR que el numero secreto`;
            break;
        case elNumeroEsMenor:
            mensaje = `${text} es MENOR que el numero secreto`;
            break;
        case esElNumeroSecreto:
            mensaje = `${text} es el numero secreto 🎆🎉`;
            break;
        case gameOverMaximoDeIntentos:
            mensaje = `${text} has superado el numero de intentos`;
            break;
        default:
            mensaje = `No se que ha pasado pero esto no deberia de dar error`;
            break;
    }
    document.getElementById("resultado").innerHTML = mensaje;
}

const comprobarNumero = (textoIntroducido) =>{ //"9"
    const numero = parseInt(textoIntroducido); // 9
    const esUnNumero = !isNaN(numero); // true

    if (!esUnNumero){
        return noEsUnNumero;
    }
    if(numero === numeroParaAcertar){
        return esElNumeroSecreto
    }
    if (hasSuperadoElNumeroMaximoDeIntentos()){
        return gameOverMaximoDeIntentos;
    } else {
        return numero > numeroParaAcertar ? elNumeroEsMayor : elNumeroEsMenor;
    } 
};



const handleCompruebaClick = () =>{
    const texto = document.getElementById("number").value; //numero introducido en el input
    const estado = comprobarNumero(texto); //si el numero es mayor o menor o secreto
    numeroDeIntentos++; //suma los intentos
    muestraMensajeDeComprobacion(texto, estado); // muestra el mensaje del numero y del estado
    muestraNumeroDeIntentos();
    gestionarGameOver(estado); // pregunta porque se pone estado ahi????
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click" , handleCompruebaClick);
