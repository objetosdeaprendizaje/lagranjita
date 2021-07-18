function uno() {
    let unos = Array.from(document.getElementsByClassName('uno'));
    unos.forEach(uno => {
        uno.addEventListener('click', ()=> {
          document.querySelector(".audio-one").play();  
        });
      });
    }
    uno();
  function dos() {
    let doss = Array.from(document.getElementsByClassName('dos'));
    doss.forEach(dos => {
        dos.addEventListener('click', ()=> {
          document.querySelector(".audio-two").play();  
        });
      });    
    }
    dos();
  function tres() {
    let tress = Array.from(document.getElementsByClassName('tres'));
    tress.forEach(tres => {
        tres.addEventListener('click', ()=> {
          document.querySelector(".audio-three").play();  
        });
      });    
    }
    tres();
  function cuatro() {
    let cuatros = Array.from(document.getElementsByClassName('cuatro'));
    cuatros.forEach(cuatro=> {
        cuatro.addEventListener('click', ()=> {
          document.querySelector(".audio-four").play();  
        });
      });    
    }
    cuatro();
  function cinco() {
    let cincos = Array.from(document.getElementsByClassName('cinco'));
    cincos.forEach(cinco => {
        cinco.addEventListener('click', ()=> {
          document.querySelector(".audio-five").play();  
        });
      });    
    }
    cinco();
    function seis() {
        let seiss = Array.from(document.getElementsByClassName('seis'));
        seiss.forEach(seis => {
            seis.addEventListener('click', ()=> {
              document.querySelector(".audio-six").play();  
            });
          });    
        }
    seis();
    function siete() {
        let sietes = Array.from(document.getElementsByClassName('siete'));
        sietes.forEach(siete => {
            siete.addEventListener('click', ()=> {
              document.querySelector(".audio-seven").play();  
            });
          });    
        }
    siete();
    function ocho() {
        let ochoss = Array.from(document.getElementsByClassName('ocho'));
        ochoss.forEach(ocho => {
            ocho.addEventListener('click', ()=> {
              document.querySelector(".audio-eight").play();  
            });
          });    
        }
    ocho();
    function nueve() {
        let nueves = Array.from(document.getElementsByClassName('nueve'));
        nueves.forEach(nueve => {
            nueve.addEventListener('click', ()=> {
              document.querySelector(".audio-nine").play();  
            });
          });    
        }
    nueve();
    function diez() {
        let diezz = Array.from(document.getElementsByClassName('diez'));
        diezz.forEach(diez => {
            diez.addEventListener('click', ()=> {
              document.querySelector(".audio-ten").play();  
            });
          });    
        }
    diez();