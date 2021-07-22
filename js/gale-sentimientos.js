$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-triste").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-feliz").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-temeroso").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-furioso").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-calmado").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-aburrido").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-amistoso").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-sorprendido").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });