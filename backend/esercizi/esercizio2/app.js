const express = require('express')

const app = express()
const PORT = 3002

app.get('/', (_, res) => res.send("Hello World!"))

app.get('/saluti', (req, res) => {
    const name = req.query['name']

    res.send("Ciao " + name) 
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))