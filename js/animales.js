function vaca() {
    let vacas = Array.from(document.getElementsByClassName('vaca'));
      vacas.forEach(vaca => {
        vaca.addEventListener('click', ()=> {
          document.querySelector(".audio-vaca").play();  
        });
      });
    }
    vaca();
  function caballo() {
    let caballos = Array.from(document.getElementsByClassName('caballo'));
      caballos.forEach(caballo => {
        caballo.addEventListener('click', ()=> {
          document.querySelector(".audio-caballo").play();  
        });
      });    
    }
    caballo();
  function pato() {
    let patos = Array.from(document.getElementsByClassName('pato'));
      patos.forEach(pato => {
        pato.addEventListener('click', ()=> {
          document.querySelector(".audio-pato").play();  
        });
      });    
    }
    pato();
  function puerquito() {
    let puerquitos = Array.from(document.getElementsByClassName('puerquito'));
    puerquitos.forEach(puerquito => {
        puerquito.addEventListener('click', ()=> {
          document.querySelector(".audio-puerquito").play();  
        });
      });    
    }
    puerquito();
  function burro() {
    let burros = Array.from(document.getElementsByClassName('burro'));
    burros.forEach(burro => {
        burro.addEventListener('click', ()=> {
          document.querySelector(".audio-burro").play();  
        });
      });    
    }
    burro();
    function conejo() {
        let conejos = Array.from(document.getElementsByClassName('conejo'));
        conejos.forEach(conejo => {
            conejo.addEventListener('click', ()=> {
              document.querySelector(".audio-conejo").play();  
            });
          });    
        }
    conejo();
    function cabra() {
        let cabras = Array.from(document.getElementsByClassName('cabra'));
        cabras.forEach(cabra => {
            cabra.addEventListener('click', ()=> {
              document.querySelector(".audio-cabra").play();  
            });
          });    
        }
    cabra();
    function gallina() {
        let gallinas = Array.from(document.getElementsByClassName('gallina'));
        gallinas.forEach(gallina => {
            gallina.addEventListener('click', ()=> {
              document.querySelector(".audio-gallina").play();  
            });
          });    
        }
    gallina();
