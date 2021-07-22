$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-lunes").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-martes").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-miercoles").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-jueves").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-viernes").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-sabado").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-domingo").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });