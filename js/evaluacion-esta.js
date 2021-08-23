const form = document.getElementById('form');
var uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    var unoValue = uno.value;
    const dosValue = dos.value;
    const tresValue = tres.value;
    const cuatroValue = cuatro.value;
    
   
    if(unoValue === '3'){
        setSuccessFor(uno);
    } else{
        setErrorFor(uno);
    }
    
    if(dosValue === '4'){
        setSuccessFor(dos);
    } else{
        setErrorFor(dos);
    }

    if(tresValue === '1'){
        setSuccessFor(tres);
    } else{
        setErrorFor(tres);
    }

    if(cuatroValue === '2'){
        setSuccessFor(cuatro);
    } else{
        setErrorFor(cuatro);
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