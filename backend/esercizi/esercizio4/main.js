const express = require('express')

const app = express()
const PORT = 3000

const recipes = require('./data.json')

app.get('/', (_, res) => res.json({message: "Ricettario Minecraft"}))

app.get('/recipes', (_, res) => res.json(recipes))

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))