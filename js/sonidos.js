$(document).ready(function(){

var victoria = document.getElementById("victory-text");
var contando = document.getElementById("next");
var counter = 0;
    contando.onclick = function(){
        counter++;

        if(counter == 1){
            b();
        }
        else if(counter ==2){
            c();
        }
        else if(counter ==3){
            d();
        }
        
        else if(counter ==4){
            f();
        }
        
        else if(counter ==5){
            g();
        }
        else if(counter ==6){
            h();
        }
        else if(counter ==7){
            j();
        }
        else if(counter ==8){
            k();
        }
        else if(counter ==9){
            l();
        }
        else if(counter ==10){
            m();
        }
        else if(counter ==11){
            n();
        }
        else if(counter ==12){
            p();
        }
        else if(counter ==13){
            q();
        }
        else if(counter ==14){
            r();
        }
        else if(counter ==15){
            s();
        }
        else if(counter ==16){
            t();
        }
        else if(counter ==17){
            v();
        }
        else if(counter ==18){
            w();
        }
         else if(counter ==19){
            x();
        }
         else if(counter ==20){
            y();
        }
        else if(counter ==21){
            z();
        }
        else if(counter ==22){
            final();
            victoria.classList.add('visible');
        }
    }


function b(){
    var audio = new Audio ('audio/letra-b.mp3');
    audio.play();
};
function c(){
    var audio = new Audio ('audio/letra-c.mp3');
    audio.play();
};
function d(){
    var audio = new Audio ('audio/letra-d.mp3');
    audio.play();
};
function f(){
    var audio = new Audio ('audio/letra-f.mp3');
    audio.play();
};

function g(){
    var audio = new Audio ('audio/letra-g.mp3');
    audio.play();
};

function h(){
    var audio = new Audio ('audio/letra-h.mp3');
    audio.play();
};

function j(){
    var audio = new Audio ('audio/letra-j.mp3');
    audio.play();
};

function k(){
    var audio = new Audio ('audio/letra-k.mp3');
    audio.play();
};

function l(){
    var audio = new Audio ('audio/letra-l.mp3');
    audio.play();
};

function m(){
    var audio = new Audio ('audio/letra-m.mp3');
    audio.play();
};
function n(){
    var audio = new Audio ('audio/letra-n.mp3');
    audio.play();
};
function p(){
    var audio = new Audio ('audio/letra-p.mp3');
    audio.play();
};
function q(){
    var audio = new Audio ('audio/letra-q.mp3');
    audio.play();
};
function r(){
    var audio = new Audio ('audio/letra-r.mp3');
    audio.play();
};
function s(){
    var audio = new Audio ('audio/letra-s.mp3');
    audio.play();
};
function t(){
    var audio = new Audio ('audio/letra-t.mp3');
    audio.play();
};
function v(){
    var audio = new Audio ('audio/letra-v.mp3');
    audio.play();
};
function w(){
    var audio = new Audio ('audio/letra-w.mp3');
    audio.play();
};
function x(){
    var audio = new Audio ('audio/letra-x.mp3');
    audio.play();
};
function y(){
    var audio = new Audio ('audio/letra-y.mp3');
    audio.play();
};

function z(){
    var audio = new Audio ('audio/letra-z.mp3');
    audio.play();
};
function final(){
    var audio = new Audio ('audio/victory.wav');
    audio.play();
   
};

});


















  /*
    let slides = Array.from(document.getElementsByClassName('slide')); //se,guardan las classes en el array 


    slides[0].addEventListener('click', function(){
        alert('hola');
    });
    
    slides[1].addEventListener('click', function(){
        alert('adios');
    });
*/