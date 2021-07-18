function blue() {
    let blues = Array.from(document.getElementsByClassName('blue'));
    blues.forEach(blue => {
        blue.addEventListener('click', ()=> {
          document.querySelector(".audio-blue").play();  
        });
      });
    }
    blue();
  function red() {
    let reds = Array.from(document.getElementsByClassName('red'));
    reds.forEach(red => {
        red.addEventListener('click', ()=> {
          document.querySelector(".audio-red").play();  
        });
      });    
    }
    red();
  function pink() {
    let pinks = Array.from(document.getElementsByClassName('pink'));
    pinks.forEach(pink => {
        pink.addEventListener('click', ()=> {
          document.querySelector(".audio-pink").play();  
        });
      });    
    }
    pink();
  function green() {
    let greens = Array.from(document.getElementsByClassName('green'));
    greens.forEach(green => {
        green.addEventListener('click', ()=> {
          document.querySelector(".audio-green").play();  
        });
      });    
    }
    green();
  function yellow() {
    let yellows = Array.from(document.getElementsByClassName('yellow'));
    yellows.forEach(yellow => {
        yellow.addEventListener('click', ()=> {
          document.querySelector(".audio-yellow").play();  
        });
      });    
    }
    yellow();
    function brown() {
        let browns = Array.from(document.getElementsByClassName('brown'));
        browns.forEach(brown => {
            brown.addEventListener('click', ()=> {
              document.querySelector(".audio-brown").play();  
            });
          });    
        }
    brown();
    function orange() {
        let oranges = Array.from(document.getElementsByClassName('orange'));
        oranges.forEach(orange => {
            orange.addEventListener('click', ()=> {
              document.querySelector(".audio-orange").play();  
            });
          });    
        }
    orange();
    function purple() {
        let purples = Array.from(document.getElementsByClassName('purple'));
        purples.forEach(purple => {
            purple.addEventListener('click', ()=> {
              document.querySelector(".audio-purple").play();  
            });
          });    
        }
    purple();