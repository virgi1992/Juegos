const contenidoPantalla = document.querySelector(".pantalla");
const btn= document.querySelectorAll(".btn");
const ponerACero= document.querySelector("#c");
const borrar= document.querySelector("#borrar");
const igual = document.querySelector("#igual");

btn.forEach((boton)=>{
    boton.addEventListener("click", ()=>{

        if(boton === ponerACero){
            contenidoPantalla.textContent = "0";
            return;
        }
           
        if(boton === borrar){
            if(contenidoPantalla.textContent.length === 1 || contenidoPantalla.textContent==="Error!!" ){
                contenidoPantalla.textContent = "0";
            } else {
                 contenidoPantalla.textContent = contenidoPantalla.textContent.slice(0, -1);
        }
        return;
    }


        if(boton === igual){

            try {
                contenidoPantalla.textContent= eval(contenidoPantalla.textContent);

            } catch {
                contenidoPantalla.textContent = "Error!!"
            }
            return;
        }

        if(contenidoPantalla.textContent ==="0" || contenidoPantalla.textContent==="Error!!"){
            contenidoPantalla.textContent = boton.textContent;
        }else{
        contenidoPantalla.textContent += boton.textContent;
        }
        
    })
});

