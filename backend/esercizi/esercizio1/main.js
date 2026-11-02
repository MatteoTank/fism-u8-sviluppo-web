const express = require('express')

const app = express()
const PORT = 3000
// route
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/test', (req, res) => {
    const response = {
        success: true,
        message: 'rotta di test'
    }
    
    res.send(response)
})


app.get('/profilo', (_, res) => res.send({
  name: "Mario",
  lastname: "Rossi",
  address: {
    street: "djsfhalkjd",
    city: "Dao",
    country: "fjdsalk"
  },
  hobbies: [
    'sport',
    'music'
  ]
}))


// listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})