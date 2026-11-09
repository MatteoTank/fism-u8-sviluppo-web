const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (_, res) => res.json({massage: "Ricettario Minecraft"}))



app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))