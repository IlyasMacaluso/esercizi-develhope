import { createServer } from "node:http"

const server = createServer((req, res) => {
    console.log("richiesta ricevuta")
    res.statusCode = 200

    res.setHeader("Content-Type", "application/json")

    const jsonRes = JSON.stringify({ location: "Mars" })

    res.end(jsonRes)
})

server.listen(3000, () => {
    console.log("server is running at http://localhost:3000")
})
