import { useState } from "react"
import axios from "axios"

type iRecipe = {
    id: number,
    name: string,
    ingredients: Array<any>
    image: string
}

function RecipesPage() {

    const [recipes, setRecipes] = useState<iRecipe[]>([])

    const loadRecipes = async () => {
        const url = 'https://dummyjson.com/recipes'

        const { data } = await axios.get(url)

        setRecipes(() => ([...data.recipes]))
    }

    return (
        <div className="m-3">
            <h2>Ricette Page</h2>
            <button className="btn btn-success" onClick={ loadRecipes }>Carica Ricette</button>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gap-3">
                    {recipes && recipes.map(recipe => (
                        <div key={recipe.id} className="col">
                            <div className="card" style={{ width: '18rem'}}>
                                <img src={recipe.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text">{...recipe.ingredients}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipesPage