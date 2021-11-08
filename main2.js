/* 
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
*/

/* Creare un array di 10 giocatori di basket, con le regole sopra indicate */
const player = [
    {
        name : `LeBron`,
        surname : `James`,
        age : 36,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Kevin`,
        surname : `Durant`,
        age : 33,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Chris`,
        surname : `Paul`,
        age : 36,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `James`,
        surname : `Harden`,
        age : 32,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Stephen`,
        surname : `Curry`,
        age : 33,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Kobe`,
        surname : `Bryant`,
        age : 42,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Michael`,
        surname : `Jordan`,
        age : 58,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Damian`,
        surname : `Lillard`,
        age : 31,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Luka`,
        surname : `Doncic`,
        age : 22,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },

    {
        name : `Anthony`,
        surname : `Davis`,
        age : 28,
        averagePoints : averagePoints(),
        percentageLongShot : percentageLongShot(),
    },
];

console.table(player);

const newPlayer = [];
player.map((element) => {
    if(element.percentageLongShot > 35) {
        newPlayer.push(element);
    }
    return newPlayer;
});

console.table(newPlayer);

function generateRandomString() {
    
    const possibilities1 = "0123456789";
    const possibilities2 = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let random = '';
    let caracter = ``;
    let numbers = ``;
    
    for(let i = 0; i < 3; i++){
        const size = Math.floor(Math.random() * 9);
        caracter += possibilities1[size];
    }
    
    for(let i = 0; i < 3; i++){
        const size = Math.floor(Math.random() * 26);
        numbers += possibilities2[size];
    }
    
    random = caracter + numbers;
    
    return random;

  }

  function averagePoints () {
    const random = Math.floor(Math.random() * 50);
    return random;
  };

  function percentageLongShot () {
    const random = Math.floor(Math.random() * 100);
    return random;
  }