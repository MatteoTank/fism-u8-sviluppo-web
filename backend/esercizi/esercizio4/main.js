const express = require('express')

const app = express()
const PORT = 3000

const recipes = require('./data.json')

app.get('/', (_, res) => res.json({message: "Ricettario Minecraft"}))

// query params
app.get('/recipes', (req, res) => {
    let results = recipes
    
    if (req.query.minPrepTime !== undefined) {
        const minPrepTime = Number(req.query.minPrepTime)

        if (isNaN(minPrepTime) || minPrepTime < 0)
            res.status(400).json({
                success: false,
                error: "minPrepTime has to be numeric and signed"
            })
        
        results = results.filter(r => r.prepTimeMinutes >= minPrepTime)
    }

    if (req.query.level !== undefined) {
        const difficulty = req.query.level.toLowerCase()
        const allowedDifficulty = [...new Set(results.map(r => r.difficulty.toLowerCase()))]

        if (!listDifficulty.includes(difficulty))
            res.status(400).json({
                success: false,
                error: "difficulty is not in the list"
            })

        results = results.filter(r => r.difficulty.toLowerCase() === difficulty)
    }

    res.status(200).json({
        success: true,
        data: results
    })
})

// path params
app.get('/recipes/:id', (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) 
        res.status(400).json({
            success: false,
            error: "id has to be an integer number"
        })
    
    const recipe = recipes.find(r => r.id === id)
    
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