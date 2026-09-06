import { useState } from "react"
import Button from "./Button"

function Greetings() {

    const initialPerson = {
        name: '',
        surname: '',
        email: '',
    }

    const [person, setPerson] = useState(() => ({...initialPerson}))

    const changePerson = ({ target }) => setPerson(person => ({...person, [target.name]: target.value}))

    const reset = () => setPerson(() => ({...initialPerson}))

    return (
        <>
            <input 
                type="text"
                name="name"
                value={person.name} 
                onChange={changePerson} 
                placeholder="Inserisci un tuo nome" 
            />
            <input 
                type="text"
                name="surname"
                value={person.surname} 
                onChange={changePerson} 
                placeholder="Inserisci un tuo cognome" 
            />
            <input 
                type="email"
                name="email"
                value={person.email} 
                onChange={changePerson} 
                placeholder="Inserisci un tua email" 
            />
            <Button label='Reset' onClick={reset} />
            <p>Ciao {person.name} {person.surname} {person.email}</p>
        </>
    )
}

export default Greetings