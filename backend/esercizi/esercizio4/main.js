const express = require('express')

const app = express()
const PORT = 3000

const recipes = require('./data.json')

app.get('/', (_, res) => res.json({message: "Ricettario Minecraft"}))

app.get('/recipes', (_, res) => res.json(recipes))

app.get('/recipes/:id', (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) 
        res.status(400).json({
            success: false,
            error: "id has to be an integer number"
        })
    
    const recipe = recipes.find(recipe => recipe.id === id)
    
    if (!recipe)
        res.status(404).json({
            success: false,
            error: "Recipe not found"
        })

    res.status(200).json({
        success: true,
        data: recipe
    })
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))