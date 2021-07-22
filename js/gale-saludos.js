$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-mañana").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-tarde").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-media").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-noche").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });