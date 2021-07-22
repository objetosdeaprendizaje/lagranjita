$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-uno").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-dos").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-tres").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-cuatro").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-cinco").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-seis").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-siete").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-ocho").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-nueve").play();  
            }
            else if(counter ==10){
                document.querySelector(".audio-diez").play();  
            }
            else if(counter ==11){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });