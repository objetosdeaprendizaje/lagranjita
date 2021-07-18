function dia() {
    let dias = Array.from(document.getElementsByClassName('dia'));
        dias.forEach(dia => {
        dia.addEventListener('click', ()=> {
          document.querySelector(".audio-dia").play();  
        });
      });
    }
    dia();
  function tarde() {
    let tardes = Array.from(document.getElementsByClassName('tarde'));
        tardes.forEach(tarde => {
        tarde.addEventListener('click', ()=> {
          document.querySelector(".audio-tarde").play();  
        });
      });    
    }
    tarde();
  function medio() {
    let medios = Array.from(document.getElementsByClassName('evening'));
    medios.forEach(medio => {
        medio.addEventListener('click', ()=> {
          document.querySelector(".audio-medio").play();  
        });
      });    
    }
    medio();
  function noche() {
    let noches = Array.from(document.getElementsByClassName('noche'));
    noches.forEach(noche => {
        noche.addEventListener('click', ()=> {
          document.querySelector(".audio-noche").play();  
        });
      });    
    }
    noche();