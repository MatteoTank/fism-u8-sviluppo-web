import { useState } from "react"
import axios from "axios"

function ProductsPage () {

    const [products, setProducts] = useState ([])

    const loadProducts = async () => {
        const url = "https://fakestoreapi.com/products"
        const response = await axios.get(url)
        setProducts (response.data)
    }

    return (
        <>
        <h2>Products</h2>
        <br />
        <button className="btn btn-dark" onClick={loadProducts}>Load Products</button>
        <table className="table">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Image</td>
                </tr>
            </thead>
            <tbody>
                { products.map( (product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td><img className="product-img" src={product.image} /></td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
        </>
    )

}

export default ProductsPage