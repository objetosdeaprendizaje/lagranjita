class AudioController{
	constructor(){
		this.bgMusic = new Audio('audio/fondo1.mp3'); //creando los audio
		this.bgMusic.volume = 1; //bajando el volumen del audio
		this.bgMusic.loop = false; //para que la musica de repita
	}

	startMusic(){ // funcion para iniciar la musica de fondo
		this.bgMusic.play();
	}
	stopMusic(){
		this.bgMusic.pause();
	}
	
}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); //se,guardan las classes en el array 

	overlays.forEach(overlay => {  //recorre los elementos del array
        overlay.addEventListener('click', () => { //si hacen click 
            overlay.classList.remove('visible'); //se muestra el juego ocultandose el mensaje *JUGAR*
            //game start
			//creando una instancia del objeto para llamar al constructor 
			let audioController = new AudioController();
			audioController.startMusic();
        });
    });
}
	
if(document.readyState === 'loading'){ //si la pagina aun esta cargando 
    document.addEventListener('DOMContentLoaded', ready()); //cuando el html se ha cargado llamamos la funcion listo
} else { 
    ready(); //inicializa todo el programa 
}



