function aburrido() {
    let aburridos = Array.from(document.getElementsByClassName('aburrido'));
    aburridos.forEach(aburrido => {
        aburrido.addEventListener('click', ()=> {
          document.querySelector(".audio-aburrido").play();  
        });
      });
    }
    aburrido();
  function feliz() {
    let felizz = Array.from(document.getElementsByClassName('feliz'));
    felizz.forEach(feliz => {
        feliz.addEventListener('click', ()=> {
          document.querySelector(".audio-feliz").play();  
        });
      });    
    }
    feliz();
  function sorprendido() {
    let sorprendidos = Array.from(document.getElementsByClassName('sorprendido'));
    sorprendidos.forEach(sorprendido => {
        sorprendido.addEventListener('click', ()=> {
          document.querySelector(".audio-sorprendido").play();  
        });
      });    
    }
    sorprendido();
  function molesto() {
    let molestos = Array.from(document.getElementsByClassName('molesto'));
    molestos.forEach(molesto => {
        molesto.addEventListener('click', ()=> {
          document.querySelector(".audio-molesto").play();  
        });
      });    
    }
    molesto();
  function amistoso() {
    let amistosos = Array.from(document.getElementsByClassName('amistoso'));
    amistosos.forEach(amistoso => {
        amistoso.addEventListener('click', ()=> {
          document.querySelector(".audio-amistoso").play();  
        });
      });    
    }
    amistoso();
    function tranquilo() {
        let tranquilos = Array.from(document.getElementsByClassName('tranquilo'));
        tranquilos.forEach(tranquilo => {
            tranquilo.addEventListener('click', ()=> {
              document.querySelector(".audio-tranquilo").play();  
            });
          });    
        }
    tranquilo();
    function triste() {
        let tristes = Array.from(document.getElementsByClassName('triste'));
        tristes.forEach(triste => {
            triste.addEventListener('click', ()=> {
              document.querySelector(".audio-triste").play();  
            });
          });    
        }
    triste();
    function temeroso() {
        let temerosos = Array.from(document.getElementsByClassName('temeroso'));
        temerosos.forEach(temeroso => {
            temeroso.addEventListener('click', ()=> {
              document.querySelector(".audio-temeroso").play();  
            });
          });    
        }
    temeroso();