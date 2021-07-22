$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-abuelo").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-abuela").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-papa").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-mama").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-tio").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-tia").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-primo").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-primo").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-hija").play();  
            }
            else if(counter ==10){
                document.querySelector(".audio-hijo").play();  
            }
            else if(counter ==11){
                document.querySelector(".audio-wife").play();  
            }
            else if(counter ==12){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });