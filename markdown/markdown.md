# Creare un generatore di password

## Obiettivo

Dobbiamo creare un generatore di password di livello estremamente semplice, quindi senza curare il livello di sicurezza, che perciò sarà estremamente basso.

Il generatore di password dovrà chiede all'utente il suo nome, il suo cognome e il suo colore preferito, dopodiché il generatore di password dovrà mettere assieme queste informazioni e il numero 23 per formare la password: nomecognomecolorepreferito23.

Il nome della repo del nostro generatore di password dovrà chiamarsi: js-pwdgen-wannabe

## Passaggi necessari

- SE abbiamo un boilerplate da cui partire,
  - ALLORA bisogna creare una sua copia sul desktop e nominarla "js-pwdgen-wannabe",
  - POI la cartella dev'essere aperta con VScode ,
  - POI si deve controllare che il foglio di stile CSS sia tutto sotto commento, in modo che non interferisca col codice,
    - SE non è tutto sotto commento ALLORA rimediare subito,
    - SE è tutto sotto commento ALLORA proseguire,
  - POI si deve controllare che nell'head dell'index siano sotto commento eventuali parti di codice che impostano bootstrap, font awesome e collegano l'index.html al foglio di stile CSS, in modo che non interferiscano col codice,
    - SE non sono sotto commento ALLORA rimediare subito,
    - SE sono sotto commento ALLORA proseguire,
  - POI si deve controllare se nel body c'è già scritto qualcosa,
    - SE c'è ALLORA procedere a cancellare
    - SE NON c'è ALLORA proseguire
- SE NON abbiamo un boilerplate da cui partire
  - ALLORA creare una nuova cartella sul desktop
  - POI nominare questa cartella "js-pwdgen-wannabe"
  - POI aprire questa cartella con VScode
  - POI con VScode creare dentro questa cartella un file index.html
  - predisporre le impostazioni di base dell'head dell'index.html E creare un body vuoto
- POI creare nel body un h1 con al suo interno le parole "Hello world" E dare ad H1 l'id "main-title"
- POI creare una cartella fuori dall'index.html chiamata "js"
- POI creare dentro la cartella js un file chiamato "main.js"
- POI aprire il file main.js
- POI al suo interno creare un prompt che raccoglie come informazione il nome dell'utente che se lo dovesse trovare davanti e la assegna alla costante che chiameremo "nome"
- POI creare un prompt che raccoglie come informazione il cognome dell'utente che se lo dovesse trovare davanti e la assegna alla costante che chiameremo "cognome"
- POI creare un prompt che raccoglie come informazione il colore preferito dell'utente che se lo dovesse trovare davanti e la assegna alla costante che chiameremo "colore"
- POI creo una costante chiamata password E unisco i dati precedentemente raccolti con una somma di strings E come ultimo string da sommare aggiungo "23"
- POI stampo la password sulla console
- POI stampo la password su html usando main-title.innerHTML
