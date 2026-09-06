import { useEffect, useState } from "react"
import axios from "axios"

function RecipesPage () {

    const [recipes, setRecipes] = useState ([])

    const loadRecipes = async () => {
        const url = "https://dummyjson.com/recipes"
        const response = await axios.get(url)
        setRecipes (response.data.recipes)
    }


    return (
        <>
            <h2>Recipes</h2>
            <br />
            <button className="btn btn-warning" onClick={loadRecipes}>Load Recipes</button>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Image</td>
                        <td>Instructions</td>
                    </tr>
                </thead>
                <tbody>
                    { recipes.map( (recipe) => {
                            return (
                                <tr key={recipe.id}>
                                    <td>{recipe.name}</td>
                                    <td><img className="product-img" src={recipe.image} /></td>
                                    <td>{recipe.instructions}</td>
                                </tr>
                            )
                        })
                    }   
                </tbody>
            </table>
        </>
    )
}

export default RecipesPage