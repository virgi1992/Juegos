//variables

let puntosTotales = 0;

//operacion única responsabilidad


//genera un numero aleatorio del 1 al 10
const generarNumeroAleatorio = () => Math.ceil(Math.random()*10); 

//decirle a la carta que los valores 8 y 9 no se utilizan
const generarCarta = (numeroAleatorio) =>{
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}
console.log(generarNumeroAleatorio()); //muestrame el numero en consola

//cambiar en el html la puntuacion
const mostrarPuntuacion = (puntuacion) =>{
    let puntos = document.getElementById("puntuacion");
    if (puntos){ //aqui preguntamos si puntos es undefined o null y lo cambiamos en el html
        puntos.innerText = puntuacion;
    }
}

//cuanto valen las cartas 1-7 = su valor 10,11,12= 0.5
 const valorPuntos = (cartas) =>{
    return cartas < 10 ? cartas : 0.5;
 }

 //aqui se suman los puntos nuevos a los que ya tenia
 const calcularPuntuacion = (carta) =>{
    let puntos = valorPuntos(carta);
    puntosTotales = puntosTotales + puntos;
 }

 //aqui cogemos la url del div de la imagen
 const mostrarImagen = (urlImagen) =>{
    let carta = document.getElementById("imagenCarta");
    if (carta){
        carta.src = urlImagen;
    }else {
        console.log("No ha cogido la url fallo");
    }
 }

 //aqui le decimos las cartas que son para que se muestre o una u otra 
 const mostrarCarta = (carta) =>{
    let urlCartas= "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas";
    let urlCartaVuelta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas";

    switch(carta){
        case 1:
        mostrarImagen(urlCartas + "/1_as-copas.jpg");
        break;
        case 2:
        mostrarImagen(urlCartas + "/2_dos-copas.jpg");
        break;
        case 3:
        mostrarImagen(urlCartas + "/3_tres-copas.jpg");
        break;
        case 4:
        mostrarImagen(urlCartas + "/4_cuatro-copas.jpg");
        break;
        case 5:
        mostrarImagen(urlCartas + "/5_cinco-copas.jpg");
        break;
        case 6:
        mostrarImagen(urlCartas + "/6_seis-copas.jpg");
        break;
        case 7:
        mostrarImagen(urlCartas + "/7_siete-copas.jpg");
        break;
        case 8:
        mostrarImagen(urlCartas + "/8_ocho-copas.jpg");
        break;
        case 9:
        mostrarImagen(urlCartas + "/9_nueve-copas.jpg");
        break;
        case 10:
        mostrarImagen(urlCartas + "/10_sota-copas.jpg");
        break;
        case 11:
        mostrarImagen(urlCartas + "/11_caballo-copas.jpg");
        break;
        case 12:
        mostrarImagen(urlCartas + "/12_rey-copas.jpg");
        break;
        case 0:
        mostrarImagen(urlCartaVuelta + "/back.jpg");
        break;

    }
 };


 //mensaje de puntuacion segun los puntos acumulados
 const hemosGanadoPartida = () =>{
    mostrarPuntuacion("hemos ganado " + puntosTotales); 
    desabilitarBotonPedirCarta(true); 
 }

 const hemosPerdidoPartida = () =>{
    mostrarPuntuacion("hemos perdido " + puntosTotales);
    desabilitarBotonPedirCarta(true);
 }

const revisarMano = () =>{
    if(puntosTotales === 7.5){
        hemosGanadoPartida();
    }
    if(puntosTotales > 7.5){
        hemosPerdidoPartida()
    }
};

const desabilitarBotonPedirCarta = (estaDesabilitado) =>{
    let botonPedir = document.getElementById("pedirCarta");
    if(botonPedir){
        botonPedir.disabled = estaDesabilitado;
        
    }
    if(estaDesabilitado){
        botonPedir.style.background = "grey";
    }else {
        botonPedir.style.background = `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(188,45,253,1) 100%)`;
    }
}

// //esto es igual que handleBotonClick es la funcion que engloba a todas las demas 
const cogerCarta = () =>{
    let numeroAleatorio = generarNumeroAleatorio();
    let numeroCarta = generarCarta(numeroAleatorio);

    calcularPuntuacion(numeroCarta); //valorPunto no se pone porque esta dentro de calcular puntuacion
    mostrarPuntuacion(puntosTotales);
    mostrarCarta(numeroCarta);
    revisarMano();
 };

 const pedirCartaBoton = document.getElementById("pedirCarta");
 pedirCartaBoton.addEventListener("click", cogerCarta);

 // Boton Nueva partida 

 const cogerNuevaPartida = () =>{
    puntosTotales = 0;
    mostrarPuntuacion("0");
    mostrarCarta(0);
    desabilitarBotonPedirCarta(false);
    desabilitarBotonMePlanto(false);
    desabilitarBotonQueHabriaPasado(false);
 }

    const botonNuevaPartida = document.getElementById("nuevaPartida");
    botonNuevaPartida.addEventListener("click", cogerNuevaPartida);
 

 //me planto
 const mePlanto = () =>{
    mostrarResultadoMeHePlantado();
    desabilitarBotonPedirCarta(true);
    desabilitarBotonMePlanto(true);
 }

const mostrarResultadoMeHePlantado = () =>{
    if ( puntosTotales <4){
        mostrarPuntuacion(`Ha sido muy conservador ${puntosTotales}`);
    }
    if (puntosTotales>=5 && puntosTotales <6 ){
        mostrarPuntuacion(`Te ha entrado miedo ${puntosTotales}`);
    }
    if (puntosTotales >=6 && puntosTotales <=7){
        mostrarPuntuacion(`Casi casi lo logras`);
    }
    if (puntosTotales === 7.5){
        mostrarPuntuacion(`Lo has clavado Enhorabuena`)
    }
}

const desabilitarBotonMePlanto = (estaDesabilitado) =>{
    let botonMePlanto = document.getElementById("mePlantoBoton");
    if (botonMePlanto){
        botonMePlanto.disabled = estaDesabilitado;
      
    }
    if(estaDesabilitado){
        botonMePlanto.style.background =`grey`;
    }else{
        botonMePlanto.style.background = `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(188,45,253,1) 100%)`;
    }
}

const botonMePlanto = document.getElementById("mePlantoBoton");
botonMePlanto.addEventListener("click", mePlanto);



const queHabriaPasado = () =>{
    let nuevoBotonAleatorio = generarNumeroAleatorio();
    let nuevaCarta = generarCarta(nuevoBotonAleatorio);
    mostrarCarta(nuevaCarta);
    calcularPuntuacion(nuevaCarta);
    mostrarPuntuacion(nuevaCarta);
    mostrarMensajeQueHabriaPasado();
    desabilitarBotonQueHabriaPasado(true);
    
}

const mostrarMensajeQueHabriaPasado = () =>{
    if (puntosTotales === 7.5){
        mostrarPuntuacion(`Habrias ganado el juego ${puntosTotales}`);
    }
    if (puntosTotales < 7.5){
        mostrarPuntuacion(`No habrias ganado el juego pero estas a punto de ganar ${puntosTotales}`);
    }
    if ( puntosTotales > 7.5){
        mostrarPuntuacion ( `Habrias perdido ${puntosTotales}`);
    }
}

const desabilitarBotonQueHabriaPasado = (estaDesabilitado) =>{
 let botonQueHabriaPasado = document.getElementById(`queHabriaPasado`);
 if (botonQueHabriaPasado){
    botonQueHabriaPasado.disabled = estaDesabilitado;
    
 }
 if(estaDesabilitado){
    botonQueHabriaPasado.style.background =`grey`;
 }else {
    botonQueHabriaPasado.style.background=`linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(188,45,253,1) 100%)`;
 }
}
const queHabriaPasadoBoton = document.getElementById("queHabriaPasado");
queHabriaPasadoBoton.addEventListener("click", queHabriaPasado);