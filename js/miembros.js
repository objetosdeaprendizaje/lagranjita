function abuelo() {
    let abuelos = Array.from(document.getElementsByClassName('abuelo'));
    abuelos.forEach(abuelo => {
      abuelo.addEventListener('click', ()=> {
          document.querySelector(".audio-abuelo").play();  
        });
      });
    }
    abuelo();
  function abuela() {
    let abuelas = Array.from(document.getElementsByClassName('abuela'));
    abuelas.forEach(abuela => {
      abuela.addEventListener('click', ()=> {
          document.querySelector(".audio-abuela").play();  
        });
      });    
    }
    abuela();
  function papa() {
    let papas = Array.from(document.getElementsByClassName('papa'));
    papas.forEach(papa => {
      papa.addEventListener('click', ()=> {
          document.querySelector(".audio-papa").play();  
        });
      });    
    }
    papa();
  function mama() {
    let mamas = Array.from(document.getElementsByClassName('mama'));
    mamas.forEach(mama => {
      mama.addEventListener('click', ()=> {
          document.querySelector(".audio-mama").play();  
        });
      });    
    }
    mama();
  function hija() {
    let hijas = Array.from(document.getElementsByClassName('hija'));
    hijas.forEach(hija => {
      hija.addEventListener('click', ()=> {
          document.querySelector(".audio-hija").play();  
        });
      });    
    }
    hija();
    function hijo() {
        let hijos = Array.from(document.getElementsByClassName('hijo'));
        hijos.forEach(hijo => {
          hijo.addEventListener('click', ()=> {
              document.querySelector(".audio-hijo").play();  
            });
          });    
        }
      hijo();
    function tio() {
        let tios = Array.from(document.getElementsByClassName('tio'));
        tios.forEach(tio => {
            tio.addEventListener('click', ()=> {
              document.querySelector(".audio-tio").play();  
            });
          });    
        }
    tio();
    function prima() {
        let primas = Array.from(document.getElementsByClassName('prima'));
        primas.forEach(prima => {
            prima.addEventListener('click', ()=> {
              document.querySelector(".audio-prima").play();  
            });
          });    
        }
    prima();