const stickDraw = document.querySelector('.stick-man');
const btnSend = document.querySelector('.btn-send');
const inputWord = document.querySelector('.input-word');
const help = document.querySelector('.help');
const letterGuess = document.querySelector('.word-trys');

let nError = 0;
let hits = [];
let equalLetter = false;
let prevHit = ``;

let words = [
    'Mujer', 'Hombre', 'Nueva', 'Casa', 'Frente', 'Jose',
    'Ciudad', 'Social', 'Sistema', 'Cosas', 'Historia', 'Muchos',
    'Nuestro', 'Noche', 'Punto', 'Grandes', 'Estado', 'Pais',
    'Mexico', 'Horas', 'Tarde', 'Ley', 'Guerra', 'Realidad', 
    'Marvel', 'Spiderman', 'Flash', 'Batman', 'Superman', 
    'DC', 'Cambio', 'Escuela', 'Novia', 'Novio', 'Pareja',
    'Relacion', 'Obra', 'Cuerpo', 'Madre', 'Padre', 'Iglesia',
    'Goku', 'Anime', 'Serie', 'Pelicula', 'Moda', 'Ojos',
   'Regalo', 'Tierra', 'Planeta', 'Alien', 'Extraterrestre',
   'Desparanguarititimiacuro', 'Familia', 'Seguridad', 'Proyecto',
   'Robot', 'Terror', 'Cuento', 'Youtube', 'Tiktok', 'Cancion',
   'Musica', 'Amor', 'Tristeza', 'Disney', 'Banco', 'Parque',
   'Preparatoria', 'Carro', 'Camion', 'Tacos', 'Torta',
   'Raspados', 'Instagram', 'Japon', 'Corona', 'Cerveza', 
   'Carrera', 'Licenciado', 'Abogado', 'Streamer', 'Enamorados',
   'Discord', 'Videojuegos', 'Rentar', 'Comer', 'Conversar',
   'Faraon', 'Videos', 'Dinosaurio', 'HP', 'Severus', 'Ron',
   'Hermione', 'Anakin', 'Vader', 'Skywalker', 'TRex', 'Chiste'
];

let mexicanWords = [
    'Bueno', 'Arre', 'Chacharear', 'Chavo', 'Chin', 'Gacho',
    'Pichar', 'Quiubole', 'Wacha', 'Carrilla', 'Echar Pata',
    'Neta', 'Aguitado', 'Cañon', 'Hueva', 'Mole', 'Mamada', 
    'Manches', 'Orale','Cura', 'Padre', 'Chava', 'Jarocha',
    'Amuelas', 'Chicle', 'Merito', 'Tumbado', 'Rollo', 'Canoa',
    'Patada', 'Curado', 'Chido', 'Botana', 'Cruda', 'Poca',
    'Fresa', 'Mames', 'Fierro', 'Ñonga', 'Pariente'
];

//----------------------------------------------------------

let wordTGM;
let wordTG;

// wordTG = Math.round(Math.random()*99+1);
wordTGM = Math.round(Math.random()*99+1);
wordTGM = words[wordTGM];
help.innerHTML = `${wordTGM.length} letras y empieza con ${wordTGM[0]}`;
// console.log(wordTGM); no

let imgStage = [
    'img/etapas/0error.png', 'img/etapas/1error.png', 'img/etapas/2error.png',
    'img/etapas/3error.png', 'img/etapas/4error.png', 'img/etapas/5error.png',
    'img/etapas/6error.png', 'img/etapas/7error.png', 'img/etapas/8error.png',
    'img/etapas/9error.png'
];

stickDraw.src = `${imgStage[0]}`;

const main = ()=>{
    let userValue = inputWord.value;
    prevHit = hits.toString().replaceAll(',', '');

    for (var i=0; i<wordTGM.length; i++){
        if (userValue[i] == wordTGM[i]){
            // console.log(userValue[i]);
            hits[i] = userValue[i];
        }else{
            hits[i] = '_';
        }
    }

    // console.log(prevHit);
    // console.log(hits);
    if(prevHit != hits.toString().replaceAll(',', '')){
        equalLetter = true;
    }else{
        equalLetter = false;
    }
    letterGuess.innerHTML = hits.toString().replaceAll(',', '');

    let prevError = nError;

    if (userValue != wordTGM){
        if (nError == 9){
            alert("Perdiste");
            location.reload();
        }else{
            if(equalLetter == true){
                nError = nError;
            }else{
            nError++;
            console.log(nError);
            }
        }
    }else{
        alert("Acertaste");
        location.reload();
    }

    // console.log(userValue);
    stickDraw.src = `${imgStage[nError]}`;
    
}


btnSend.addEventListener("click", (e)=>{
	e.preventDefault();
	main();
})