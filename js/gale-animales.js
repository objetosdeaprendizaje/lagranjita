$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-caballo").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-vaca").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-conejo").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-ganso").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-oveja").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-pollo").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-gallo").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-pato").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-burro").play();  
            }
            else if(counter ==10){
                document.querySelector(".audio-zorro").play();  
            }
            else if(counter == 11){
                document.querySelector(".audio-dog").play();
            }
            else if(counter ==12){
                document.querySelector(".audio-cat").play();  
            } 
            else if(counter ==13){
                document.querySelector(".audio-cerdo").play();  
            }        
            else if(counter ==14){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });