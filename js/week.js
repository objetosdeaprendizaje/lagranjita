function lunes() {
    let luness = Array.from(document.getElementsByClassName('lunes'));
    luness.forEach(lunes => {
        lunes.addEventListener('click', ()=> {
          document.querySelector(".audio-monday").play();  
        });
      });
    }
    lunes();
  function martes() {
    let martess = Array.from(document.getElementsByClassName('martes'));
    martess.forEach(martes => {
        martes.addEventListener('click', ()=> {
          document.querySelector(".audio-tuesday").play();  
        });
      });    
    }
    martes();
  function miercoles() {
    let miercoless = Array.from(document.getElementsByClassName('miercoles'));
    miercoless.forEach(miercoles => {
        miercoles.addEventListener('click', ()=> {
          document.querySelector(".audio-wednesday").play();  
        });
      });    
    }
    miercoles();
  function jueves() {
    let juevess = Array.from(document.getElementsByClassName('jueves'));
    juevess.forEach(jueves => {
        jueves.addEventListener('click', ()=> {
          document.querySelector(".audio-thursday").play();  
        });
      });    
    }
    jueves();
  function viernes() {
    let vierness = Array.from(document.getElementsByClassName('viernes'));
    vierness.forEach(viernes => {
        viernes.addEventListener('click', ()=> {
          document.querySelector(".audio-friday").play();  
        });
      });    
    }
    viernes();
    function sabado() {
        let sabados = Array.from(document.getElementsByClassName('sabado'));
        sabados.forEach(sabado => {
            sabado.addEventListener('click', ()=> {
              document.querySelector(".audio-saturday").play();  
            });
          });    
        }
    sabado();
    function domingo() {
        let domingos = Array.from(document.getElementsByClassName('domingo'));
        domingos.forEach(domingo => {
            domingo.addEventListener('click', ()=> {
              document.querySelector(".audio-sunday").play();  
            });
          });    
        }
    domingo();
    