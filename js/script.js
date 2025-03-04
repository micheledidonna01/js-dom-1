//dichiaro una variabile che prende l'elemento button dell'html
const btn = document.getElementById('btn');

//dichiaro una variabile che prende l'immagine della lampadina spenta
const img = document.getElementById('lamp-off');

//aggiungo un evento al bottone nel momento in cui viene cliccato
btn.addEventListener('click', function(){

    //sostituisce la nuova src a quella vecchia
    img.src = 'img/yellow_lamp.png';
    img.alt = 'Lampadina accesa';
});