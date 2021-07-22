$(document).ready(function(){

    var victoria = document.getElementById("victory-text");
    var contando = document.getElementById("next");
    var counter = 0;
        contando.onclick = function(){
            counter++;
    
            if(counter == 1){
                document.querySelector(".audio-pollo").play();  
            }
            else if(counter ==2){
                document.querySelector(".audio-leche").play();  
            }
            else if(counter ==3){
                document.querySelector(".audio-manzana").play();  
            }
            
            else if(counter ==4){
                document.querySelector(".audio-huevo").play();  
            }
            
            else if(counter ==5){
                document.querySelector(".audio-helado").play();  
            }
            else if(counter ==6){
                document.querySelector(".audio-palomitas").play();  
            }
            else if(counter ==7){
                document.querySelector(".audio-pan").play();  
            }
            else if(counter ==8){
                document.querySelector(".audio-queso").play();  
            }
            else if(counter ==9){
                document.querySelector(".audio-pastel").play();  
            }
            
            else if(counter ==10){
                document.querySelector(".audio-final").play();  
                victoria.classList.add('visible');
            }
        }
    });