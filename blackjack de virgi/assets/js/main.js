

let deck=[];

let tipos=["H", "D", "C", "S"];
let especiales=["A", "Q", "K", "J"];

const crearDeck=()=>{
   for( let i=2; i<=10; i++){
    for (let tipo of tipos){
        deck.push(i + tipo);
    }
   }
   for (let tipo of tipos){
    for (let esp of especiales){
        deck.push(esp + tipo);
    }
   }

   deck= _.shuffle(deck);
   console.log(deck);
   return deck;
}
crearDeck();

const pedirCarta=()=>{
    if(deck.length=== 0){
        throw "no hay mas cartas en la baraja";
    }

    const carta= deck.pop();
    console.log(carta);
    return carta;
}
pedirCarta();

const valorCarta =(carta)=>{

    const valor= carta.substring(0, carta.length-1);

    return isNaN(valor)?(valor ==="A")?11:10
                        : valor*1;
        
}
valorCarta(pedirCarta());


//creamos el DOM

let puntosJugador= 0;
let puntosComputadora=0;

const btnPedir= document.getElementById("btnPedir");
const btnNuevo= document.getElementById("btnNuevo");
const btnDetener=document.getElementById("btnDetener");
const puntosHTML= document.querySelectorAll("small");
const divCartasComputadora=document.getElementById("cartas-computadora");
const divCartasJugador=document.getElementById("cartas-jugador");

btnPedir.addEventListener("click", ()=>{
    const carta= pedirCarta();
    puntosJugador= puntosJugador + valorCarta(carta);
    puntosHTML[0].innerHTML=puntosJugador;

    const imgCarta= document.createElement("img");
    imgCarta.src=`./assets/cartas/${carta}.png`;
    imgCarta.classList.add("imagenCarta");
    divCartasJugador.append(imgCarta);

    if(puntosJugador>21){
        console.warn("Perdisteeeee");
        btnPedir.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador)
    }else if(puntosJugador===21){
        console.warn("Ganasteeee");
        btnDetener.disabled=true;
        btnPedir.disabled=true;
        turnoComputadora(puntosJugador)
    }
});

btnDetener.addEventListener("click", ()=>{
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador)
})

const turnoComputadora=(puntosMinimos)=>{
       
    do{
        const carta= pedirCarta();
    puntosComputadora= puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerHTML=puntosComputadora;

    const imgCarta= document.createElement("img");
    imgCarta.src=`./assets/cartas/${carta}.png`;
    imgCarta.classList.add("imagenCarta");
    divCartasComputadora.append(imgCarta);
        if (puntosMinimos>21){
            break;
        }

    }while(puntosComputadora<puntosMinimos && puntosMinimos<21);

    setTimeout(()=>{
        if (puntosMinimos===puntosComputadora){
            alert("Nadie gana")
        }else if(puntosComputadora>21){
            alert ("El jugador gana")
        }else if(puntosJugador===21){
            alert("Jugador Gana")
        }else{
            alert("Computadora gana");
        }
    }, 30);
}



btnNuevo.addEventListener("click",()=>{
    console.clear();
    deck=[];
    deck=crearDeck();

    puntosComputadora=0;
    puntosJugador=0;
    puntosHTML[0].innerHTML=0;
    puntosHTML[1].innerHTML=0;

    divCartasComputadora.innerHTML="";
    divCartasJugador.innerHTML="";

    btnPedir.disabled=false;
    btnDetener.disabled=false;
})