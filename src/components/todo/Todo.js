import './Todo.css'
import { useState } from "react"
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate'

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Sleep'},
        { id: 2, title: 'Pray'},
        { id: 3, title: 'Eat'},

    ]);

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        // console.log(getTodos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo;