import axios from 'axios';
import { useEffect, useState } from 'react';

const ConnexionBackend = () => {

    const [todos, setTodos] = useState();

    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.success);
        console.log(result.data.success);
    }

    useEffect( () => {
        getTodos();
    }, [] );

    return (
         <div>
            <ul>
                { // {} pour interpréter du js dans du html

                    todos && todos.map( (todo) => {
                        return <li key={`${todo.id}`} >{todo.texte}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ConnexionBackend;