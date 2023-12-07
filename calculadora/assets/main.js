const contenidoPantalla = document.querySelector(".pantalla");
const btn= document.querySelectorAll(".btn");

btn.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        const contenidoBoton= boton.textContent;
        

        if(contenidoBoton === "C"){
            contenidoPantalla.textContent ="0";
            return;
        };

        if(contenidoBoton === "R"){
            if(contenidoPantalla.textContent.length === 1 || contenidoPantalla.textContent==="Error!!" ){
                contenidoPantalla.textContent = "0";
            } else {
                 contenidoPantalla.textContent = contenidoPantalla.textContent.slice(0, -1);
        }
        return;
    }


        if(boton.id === "igual"){

            try {
                contenidoPantalla.textContent= eval(contenidoPantalla.textContent);

            } catch {
                contenidoPantalla.textContent = "Error!!"
            }
            return;
        }

        if(contenidoPantalla.textContent==="0" || contenidoPantalla.textContent==="Error!!"){
            contenidoPantalla.textContent = contenidoBoton;
        }else{
        contenidoPantalla.textContent += contenidoBoton;
        }
        
    })
});




