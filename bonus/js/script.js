//dichiaro una variabile che prende l'elemento button dell'html
const btn = document.getElementById('btn');

//dichiaro una variabile che prende l'immagine della lampadina spenta
const img = document.getElementById('lamp-off');

console.log(btn.innerText);

//aggiungo un evento al bottone nel momento in cui viene cliccato
btn.addEventListener('click', function(){
    if(btn.innerText === 'Accendi'){
        btn.innerText = 'Spegni';
        img.src = 'img/yellow_lamp.png';
        img.alt = 'Lampadina accesa';
    }else if(btn.innerText === 'Spegni'){
        btn.innerText = 'Accendi';
        img.src = 'img/white_lamp.png';
        img.alt = 'Lampadina spenta';
    
    }
});