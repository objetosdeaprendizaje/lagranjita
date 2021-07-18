function primavera() {
    let primaveras = Array.from(document.getElementsByClassName('primavera'));
        primaveras.forEach(primavera => {
        primavera.addEventListener('click', ()=> {
          document.querySelector(".audio-spring").play();  
        });
      });
    }
    primavera();
  function verano() {
    let veranos = Array.from(document.getElementsByClassName('verano'));
        veranos.forEach(verano => {
        verano.addEventListener('click', ()=> {
          document.querySelector(".audio-summer").play();  
        });
      });    
    }
    verano();
  function otono() {
    let otonos = Array.from(document.getElementsByClassName('otono'));
    otonos.forEach(otono => {
        otono.addEventListener('click', ()=> {
          document.querySelector(".audio-autumn").play();  
        });
      });    
    }
    otono();
  function invierno() {
    let inviernos = Array.from(document.getElementsByClassName('invierno'));
    inviernos.forEach(invierno => {
        invierno.addEventListener('click', ()=> {
          document.querySelector(".audio-winter").play();  
        });
      });    
    }
    invierno();