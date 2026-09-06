import axios from "axios"
import { useState, useEffect } from "react"

function UniPage () {

const [universities, setUniversities] = useState ([])
    
const loadUniversities = async() => {
    const url = 'http://universities.hipolabs.com/search?name=middle'
    const response = await axios.get(url)
    setUniversities (response.data)
}

useEffect (() => {
    loadUniversities();
}, [])
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">University</th>
                    <th scope="col">Code</th>
                </tr>
            </thead>
            <tbody>
                 {universities.map ( (university, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{university.name}</td>
                            <td>{university.alpha_two_code}</td>
                        </tr>
                    )
                 })
                 }  
            </tbody>
        </table>
    )
}

export default UniPage