const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/src/app.html")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server has been started on port:${port}`)
})