import { Link, useNavigate, useParams } from "react-router"
import axios from "axios";
import { useEffect, useState } from "react";
import UsersPage from "./UsersPage";

function UserDetailPage () {

    const {id}= useParams();

    const [user, setUser] = useState({})

    const loadUser = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users/' + id
        const response = await axios.get(url)
        setUser(response.data)
    }

    useEffect (() => {
        loadUser()
    }, [])

    let navigate = useNavigate();
    
    return (
        <>
        <h2> User details ID: {id}</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>City: {user.address?.city}</p>
        <p>Coordinates: lat {user.address?.geo?.lat}, long {user.address?.geo?.lng}</p>

        <Link className="btn btn-warning" to= '/users'>Torna alla lista</Link>
        <button className="btn btn-primary" onClick={() => navigate('/users')}>Gran Bottone</button>
        </>
    )

}

export default UserDetailPage