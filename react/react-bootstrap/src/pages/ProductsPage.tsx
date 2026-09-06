import axios from "axios"
import { useState } from "react"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

function ProductPage() {
  const [products, setProduct] = useState<Product[]>([])

  const loadProducts = async () => {
    const url = 'https://fakestoreapi.com/products'

    const { data } = await axios.get(url)

    setProduct(data)
  }

  return (
    <div className="m-3">
      <h2>Products Page</h2>
      <button className="btn btn-success" onClick={ loadProducts }>Carica Prodotti</button>
      <table className="table">
        <thead>
          <tr>
            <td scope="col">Titolo</td>
            <td scope="col">Prezzo</td>
            <td scope="col">Immagine</td>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt={product.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} /></td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductPage