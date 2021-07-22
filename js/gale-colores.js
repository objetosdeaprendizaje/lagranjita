$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-naranja").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-blanco").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-verde").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-rojo").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-amarillo").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-negro").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-gris").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-rosa").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-cafe").play();  
            }
            else if(counter ==10){
                document.querySelector(".audio-azul").play();  
            }
            else if(counter ==11){
                document.querySelector(".audio-morado").play();  
            }
            else if(counter ==12){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });