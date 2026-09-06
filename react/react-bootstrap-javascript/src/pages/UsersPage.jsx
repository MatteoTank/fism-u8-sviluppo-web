import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router"

function UsersPage () {

    const [users, setUsers] = useState ([])

    const loadUsers = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get (url)
        //console.log(response.data)
        setUsers(response.data)
    }

    useEffect( () => {
        loadUsers();
    }, [] )

    return (
    <>
        <h2>Users page</h2>
        <br />
        <ul>
            {
                users.map( (user) => {
                    return (
                        <li key={user.id}><Link to={'/users/'+user.id}>{user.name}</Link></li>
                    )
                })
            }
        </ul>
    </>
    )
}

export default UsersPage