const express = require('express')

const app = express()
const PORT = 3000

const products = require('./data.json')
console.log(products)

app.get('/', (_, res) => res.send("Hello World!"))

app.get('/products', (req, res) => {
    let result = products;

    if (req.query.maxPrice !== undefined) {
        const maxPrice = Number(req.query.maxPrice)

        if (isNaN(maxPrice)) res.json({
            success: false,
            error: 'maxprice deve essere un numero'
        })

        result = result.filter(p => p.price <= maxPrice)
    }
    
    if (req.query.minPrice !== undefined) {
        const minPrice = Number(req.query.minPrice)

        if (isNaN(minPrice)) res.json({
            success: false,
            error: 'minprice deve essere un numero'
        })

        result = result.filter(p => p.price >= minPrice)
    }

    // ordinamento
    const sort = req.query.sort;
    const order = req.query.order?.toLowerCase() || 'asc'

    if (sort) {
        const sortAllowed = ['id', 'title', 'price', 'rate']

        if (!sortAllowed.includes(sort)) res.json({
            success: false,
            error: 'parametro di ordinamento non corretto'
        })

        if (order != 'asc' && order != 'desc') res.join({
            success: false,
            error: 'parametro order non corretto (asc e desc)'
        })

        result.sort((a, b) => {
            let imp = 0

            if (typeof a[sort] === "string")
                cmp = a[sort].localeCompare(b[sort])
            else
                cmp = a[sort] - b[sort]

            return order === 'desc' ? -cmp : cmp
        })
    }

    res.json(result)
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) res.status(400).json({
        success: false,
        error: 'id deve essere un numero'
    })

    const product = products.find(product => product.id == id)

    if (!product) res.status(404).json({
        success: false,
        error: 'Product not found'
    })

    res.json(product)
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))