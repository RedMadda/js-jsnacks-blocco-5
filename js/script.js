// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var cicliLibrary = [
    {
        nome : "Monociclo",
        peso : 300
    },

    {
        nome : "Triciclo",
        peso : 500
    },

    {
        nome : "Tandem",
        peso : 700
    }
];

var lighter = cicliLibrary[0];

for (var i = 1; i < cicliLibrary.length; i++){
    if(lighter.peso > cicliLibrary[i].peso){
        lighter = cicliLibrary[i];
    }
}
console.log(lighter);

// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var tipiZucchina = [
    {
        varieta : "bianca",
        peso : 10,
        lunghezza : 22
    },

    {
        varieta : "tonda",
        peso : 110,
        lunghezza : 18
    },

    {
        varieta : "trombetta",
        peso : 51,
        lunghezza : 12
    },

    {
        varieta : "alberello",
        peso : 40,
        lunghezza : 14
    },

    {
        varieta : "albenga",
        peso : 200,
        lunghezza : 8
    },

    {
        varieta : "nera",
        peso : 250,
        lunghezza : 30
    },

    {
        varieta : "bianca",
        peso : 150,
        lunghezza : 17
    },

    {
        varieta : "valdostana",
        peso : 170,
        lunghezza : 35
    },

    {
        varieta : "golden",
        peso : 120,
        lunghezza : 9
    },

    {
        varieta : "delicious",
        peso : 50,
        lunghezza : 27
    }
];

var pesoTotale = 0;
for (var i = 0; i < tipiZucchina.length; i++){
    pesoTotale += tipiZucchina[i].peso; 
}

console.log(pesoTotale);


// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var tipiZucchina = [
    {
        varieta : "bianca",
        peso : 10,
        lunghezza : 22
    },

    {
        varieta : "tonda",
        peso : 110,
        lunghezza : 18
    },

    {
        varieta : "trombetta",
        peso : 51,
        lunghezza : 12
    },

    {
        varieta : "alberello",
        peso : 40,
        lunghezza : 14
    },

    {
        varieta : "albenga",
        peso : 200,
        lunghezza : 8
    },

    {
        varieta : "nera",
        peso : 250,
        lunghezza : 30
    },

    {
        varieta : "bianca",
        peso : 150,
        lunghezza : 17
    },

    {
        varieta : "valdostana",
        peso : 170,
        lunghezza : 35
    },

    {
        varieta : "golden",
        peso : 120,
        lunghezza : 9
    },

    {
        varieta : "delicious",
        peso : 50,
        lunghezza : 27
    }
];

var short = [];
var pesoShort = 0;
var long = [];
var pesoLong = 0;
for (var i = 0; i < tipiZucchina.length; i++){


    if (tipiZucchina[i].lunghezza > 15){
        long.push(tipiZucchina[i]);
        pesoLong += tipiZucchina[i].peso;
    } else {
        short.push(tipiZucchina[i]);
        pesoShort += tipiZucchina[i].peso;
    }
}


console.log("Short", short);
console.log("pesoShort", pesoShort);
console.log("Long", long);
console.log("pesoLong", pesoLong);

