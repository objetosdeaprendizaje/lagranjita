$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-b").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-c").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-d").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-f").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-g").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-h").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-j").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-k").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-l").play();  
            }
            else if(counter ==10){
                document.querySelector(".audio-m").play();  
            }
            else if(counter ==11){
                document.querySelector(".audio-n").play();  
            }
            else if(counter ==12){
                document.querySelector(".audio-p").play();  
            }
            else if(counter ==13){
                document.querySelector(".audio-q").play();  
            }
            else if(counter ==14){
                document.querySelector(".audio-r").play();  
            }
            else if(counter ==15){
                document.querySelector(".audio-s").play();  
            }
            else if(counter ==16){
                document.querySelector(".audio-t").play();  
            }
            else if(counter ==17){
                document.querySelector(".audio-v").play();  
            }
            else if(counter ==18){
                document.querySelector(".audio-w").play();  
            }
             else if(counter ==19){
                document.querySelector(".audio-x").play();  
            }
             else if(counter ==20){
                document.querySelector(".audio-y").play();  
            }
            else if(counter ==21){
                document.querySelector(".audio-z").play();  
            }
            else if(counter ==22){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });