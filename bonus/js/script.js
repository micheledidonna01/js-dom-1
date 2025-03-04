//dichiaro una variabile che prende l'elemento button dell'html
const btn = document.getElementById('btn');

//dichiaro una variabile che prende l'immagine della lampadina spenta
const img = document.getElementById('lamp-off');

console.log(btn.innerText);

//aggiungo un evento al bottone nel momento in cui viene cliccato
btn.addEventListener('click', function(){

    //se il testo del bottone è uguale ad Accendi
    if(btn.innerText === 'Accendi'){

        //il testo del bottone è uguale a Spegni
        btn.innerText = 'Spegni';

        //cambio la sorgente dell'immagine
        img.src = 'img/yellow_lamp.png';

        //cambio l'alt dell'immagine
        img.alt = 'Lampadina accesa';

    //altrimenti se il testo del bottone è uguale a Spegni
    }else if(btn.innerText === 'Spegni'){

        //il testo del bottone è uguale a Spegni
        btn.innerText = 'Accendi';

        //cambio la sorgente dell'immagine
        img.src = 'img/white_lamp.png';

        //cambio l'alt dell'immagine
        img.alt = 'Lampadina spenta';
    
    }
});