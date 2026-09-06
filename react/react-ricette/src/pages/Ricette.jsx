import { useState, useEffect } from 'react'
import axios from 'axios'

function Ricette() {
  const [recipes, setRecipes] = useState([])

  const loadRecipes = async () => {
    const url = 'https://www.toysroom.it/meals.php'
    
    try {
      const { data } = await axios.get(url)
      setRecipes(() => ([...data]))
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return (
    <>
      <h1 className='m-md-3'>Lista delle Ricette</h1>
      <div className='table-responsive p-md-3'>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Titolo</th>
              <th scope="col">Complessit&agrave;</th>
              <th scope="col">Durata</th>
              <th scope="col">Immagine</th>
            </tr>
          </thead>
          <tbody>
            {recipes.length > 0 && recipes.map((recipe, index) => (
              <tr key={index} className='align-middle'>
                <td>{recipe.title}</td>
                <td>{recipe.complexity}</td>
                <td>{recipe.duration} min.</td>
                <td><img src={recipe.imageUrl} alt={recipe.title} className='table-image' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Ricette