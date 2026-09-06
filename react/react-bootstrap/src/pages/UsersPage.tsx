import axios from "axios"
import { useState } from "react"

type User = {
  id: number,
  name: string,
  email: string
}

function UsersPage() {

  const [users, setUsers] = useState<User[]>([])

  const loadUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const response = await axios.get(url)

    setUsers(response.data)
    
  }

  return (
    <div className="m-3">
      <h2>Users Page</h2>
      <button className="btn btn-primary" onClick={ loadUsers }>Carica utenti</button>
      <ul className="mt-2 list-group">
        {users.map(user => {
          return (
            <li key={user.id} className="list-group-item">{ user.name }, {user.email}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersPage