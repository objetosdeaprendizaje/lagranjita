const form = document.getElementById('form');
var uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');


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
   
    if(unoValue === '3'){
        setSuccessFor(uno);
    } else{
        setErrorFor(uno);
    }
    
    if(dosValue === '1'){
        setSuccessFor(dos);
    } else{
        setErrorFor(dos);
    }

    if(tresValue === '2'){
        setSuccessFor(tres);
    } else{
        setErrorFor(tres);
    }

    if(cuatroValue === '5'){
        setSuccessFor(cuatro);
    } else{
        setErrorFor(cuatro);
    }
    
    if(cincoValue === '4'){
        setSuccessFor(cinco);
    } else{
        setErrorFor(cinco);
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