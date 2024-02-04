// COSTANTES
const contenidoPantallaByid = document.querySelector("#pantalla");
/* 
const contenidoPantalla = document.querySelector(".pantalla"); */
const btn= document.querySelectorAll(".btn");
const ponerACero= document.querySelector("#c");
const borrar= document.querySelector("#borrar");
const igual = document.querySelector("#igual");

// VARIABLES
let operacionEnCurso = '';
let valorPrevio = '';
let valorActual = '';

// UNA SOLA RESPONSABILIDAD
btn.forEach((boton)=>{
    boton.addEventListener("click", ()=>{

      manejarInput(boton.value) 
      //realizarCalculo(); //esto lo he puesto yo mirar si esta bien o no 

    })  
});

function sumar(a, b) {
    contenidoPantallaByid.innerHTML = a+b;
}
function restar(a, b) {
    contenidoPantallaByid.innerHTML = a-b;
}
function dividir(a, b) {
    contenidoPantallaByid.innerHTML = a/b;
}
function multiplicar(a, b) {
    contenidoPantallaByid.innerHTML = a*b;
}



function realizarCalculo() {
    const previo = parseFloat(valorPrevio);
    const actual = parseFloat(valorActual);

    if(isNaN(previo) || isNaN(actual)) return ''; // mostrar mensaje de error

    switch (operacionEnCurso) {
        case "+":
            sumar(previo, actual);
            break;
        case "-":
            restar(previo, actual);
            break;
        case "/":
            dividir(previo, actual);
            break;
        case "*":
            multiplicar(previo, actual);
            break;
    
        default:
            console.log("Caso por defecto");
            break;
    }

}

function manejarInput(valorPulsado){

    
    
    if(valorPulsado >= '0'  && valorPulsado <= '9'){


        // Si valor actual es 0 y me pones un 0 no hago nada
        if(valorActual === '0'){

            if(valorPulsado !== '0'){
                valorActual = valorPulsado;
            }

        } else if (valorActual == ''){

            valorActual += valorPulsado;
        } else {
            valorActual += valorPulsado;
        }


        // Si tengo 10 numeros en valor actual ya no dejo 



        contenidoPantallaByid.innerHTML = valorActual;
    } else {

        switch (valorPulsado) {
            case "+":
            case "-":
            case "/":
            case "*":
                operacionEnCurso  = valorPulsado;
                valorPrevio = valorActual;
                valorActual = '';
            break;
            case "C":
                operacionEnCurso  = '';
                valorPrevio = '';
                valorActual = '';
                contenidoPantallaByid.innerHTML = "0";
            break;
            case "R":
                // TODO: ELIMINAR ÚLTIMA CIFRA
                valorActual = valorActual.substring(0, valorActual.length -1);
                contenidoPantallaByid.innerHTML = valorActual || "0";
            break;
            case ".":
            
                // TODO: CUIDADO QUE PUEDE YA TENER UN PUNTO !!! COMPROBAR
                if(valorActual === ''){
                    valorActual = '0.';
                } else if(!valorActual.includes('.')){
                    valorActual += valorPulsado;
                    
                }

                

               

                contenidoPantallaByid.innerHTML = valorActual;
                
            break;
            case "=":
                // TODO: CUIDADO QUE PUEDE YA TENER UN PUNTO !!! COMPROBAR
                realizarCalculo();
            break;
            default:
                // METER MENSAJE AL USUARIO
                break;
        }
        
    }
}






/* 

switch (input.value) {
        case "+":
            sumar();
            break;
        case value:
            
            break;
    
        default:
            break;
    }
    
    */




