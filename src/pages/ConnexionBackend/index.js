import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

const ConnexionBackend = () => {

    const [todos, setTodos] = useState();

    const textRef = useRef();

    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.success);
        console.log(result.data.success);
    }

    const postTodo = async (event) => {
        event.preventDefault();     //empeche la page de se recharger lors du submit du form
        const result = await axios.post('http://localhost:8000/api/todos', { texte: textRef.current.value });
        const { insertId } = result.data.success;
        setTodos(prevstate => { 
            return [ ...prevstate, { id: insertId,  texte: textRef.current.value } ]
        });
        textRef.current.value = '';
        textRef.current.focus();
        console.log(todos);
    }

    useEffect( () => {
        getTodos()
        console.log(textRef.current);
    }, [] );

    return (
         <div>
         <form>
             <input type="text" ref={textRef}/>
             <input type="submit" value="Créer" onClick={ (event) => postTodo(event) } />
         </form>
            <ul>
                { // {} pour interpréter du js dans du html

                    todos && todos.map( (todo) => {
                        return <li key={todo.id}>{todo.texte}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ConnexionBackend;