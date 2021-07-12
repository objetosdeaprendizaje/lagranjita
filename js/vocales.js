function letraA() {
    let letraa = Array.from(document.getElementsByClassName('a'));
      letraa.forEach(a => {
        a.addEventListener('click', ()=> {
          document.querySelector(".audio-a").play();  
        });
      });
    }
    letraA();
  function letraE() {
    let letrae = Array.from(document.getElementsByClassName('e'));
      letrae.forEach(e => {
        e.addEventListener('click', ()=> {
          document.querySelector(".audio-e").play();  
        });
      });    
    }
    letraE();
  function letraI() {
    let letrai = Array.from(document.getElementsByClassName('i'));
      letrai.forEach(i => {
        i.addEventListener('click', ()=> {
          document.querySelector(".audio-i").play();  
        });
      });    
    }
    letraI();
  function letraO() {
    let letrao = Array.from(document.getElementsByClassName('o'));
      letrao.forEach(o => {
        o.addEventListener('click', ()=> {
          document.querySelector(".audio-o").play();  
        });
      });    
    }
    letraO();
  function letraU() {
    let letrau = Array.from(document.getElementsByClassName('u'));
      letrau.forEach(u => {
        u.addEventListener('click', ()=> {
          document.querySelector(".audio-u").play();  
        });
      });    
    }
    letraU();

    