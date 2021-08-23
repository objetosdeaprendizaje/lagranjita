const form = document.getElementById('form');
var uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    var unoValue = uno.value;
    const dosValue = dos.value;
    const tresValue = tres.value;
    const cuatroValue = cuatro.value;
    const cincoValue = cinco.value;
    const seisValue = seis.value;
    const sieteValue = siete.value;

   
    if(unoValue === '5'){
        setSuccessFor(uno);
    } else{
        setErrorFor(uno);
    }
    
    if(dosValue === '3'){
        setSuccessFor(dos);
    } else{
        setErrorFor(dos);
    }

    if(tresValue === '6'){
        setSuccessFor(tres);
    } else{
        setErrorFor(tres);
    }

    if(cuatroValue === '1'){
        setSuccessFor(cuatro);
    } else{
        setErrorFor(cuatro);
    }
    
    if(cincoValue === '7'){
        setSuccessFor(cinco);
    } else{
        setErrorFor(cinco);
    }
     
    if(seisValue === '4'){
        setSuccessFor(seis);
    } else{
        setErrorFor(seis);
    }
     
    if(sieteValue === '2'){
        setSuccessFor(siete);
    } else{
        setErrorFor(siete);
    }
}
function setErrorFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}