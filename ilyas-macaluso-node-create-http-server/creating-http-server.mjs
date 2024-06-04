import { createServer } from "node:http"

//creiamo il server utilizzando createServer
const server = createServer((req, res) => {
    console.log("richiesta ricevuta")

    //Impostiamo il codice di stato HTTP a 200 (successo)
    res.statusCode = 200

    //impostiamo il Content-Type dell'header (ovvero il tipo di dato che verrà inviato come risposta)
    res.setHeader("Content-Type", "text/html")

    //invio della risposta HTML
    res.end("<html><body><h1>I love beer</h1></body></html>")
})

//avviamo il server sulla porta 3000 (convenzione per evitare conflitti con altri processi in esecuzione sul computer)
//e passiamo una funzione di callback per inviare un messaggio di risposta inviata con successo
server.listen(3000, () => {
    console.log("server running at http:/localhost:3000")
})
