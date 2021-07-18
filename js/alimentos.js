function leche() {
    let leches = Array.from(document.getElementsByClassName('leche'));
      leches.forEach(leche => {
        leche.addEventListener('click', ()=> {
          document.querySelector(".audio-milk").play();  
        });
      });
    }
    leche();
  function queso() {
    let quesos = Array.from(document.getElementsByClassName('queso'));
    quesos.forEach(queso => {
        queso.addEventListener('click', ()=> {
          document.querySelector(".audio-cheese").play();  
        });
      });    
    }
    queso();
  function huevo() {
    let huevos = Array.from(document.getElementsByClassName('huevo'));
    huevos.forEach(huevo => {
        huevo.addEventListener('click', ()=> {
          document.querySelector(".audio-egg").play();  
        });
      });    
    }
    huevo();
  function pastel() {
    let pastels = Array.from(document.getElementsByClassName('pastel'));
    pastels.forEach(pastel => {
        pastel.addEventListener('click', ()=> {
          document.querySelector(".audio-cake").play();  
        });
      });    
    }
    pastel();
  function pollo() {
    let pollos = Array.from(document.getElementsByClassName('pollo'));
    pollos.forEach(pollo => {
        pollo.addEventListener('click', ()=> {
          document.querySelector(".audio-chicken").play();  
        });
      });    
    }
    pollo();
    function manzana() {
        let manzanas = Array.from(document.getElementsByClassName('manzana'));
        manzanas.forEach(manzana => {
            manzana.addEventListener('click', ()=> {
              document.querySelector(".audio-apple").play();  
            });
          });    
        }
    manzana();
    function pan() {
        let pans = Array.from(document.getElementsByClassName('pan'));
        pans.forEach(pan => {
            pan.addEventListener('click', ()=> {
              document.querySelector(".audio-bread").play();  
            });
          });    
        }
    pan();
    function helado() {
        let helados = Array.from(document.getElementsByClassName('helado'));
        helados.forEach(helado => {
            helado.addEventListener('click', ()=> {
              document.querySelector(".audio-ice").play();  
            });
          });    
        }
    helado();
