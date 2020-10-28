import React from 'react';
import { useSelector } from 'react-redux';
import useEditTodoState from '../Hooks/useEditTodoState';

const TodoList = () => {

    const data = useSelector(state => state);

    const todos = data.todos;

    const [eTodo, setETodo, setEditInputVal, setSaveTodo, setRemoveTodo] = useEditTodoState();


    return (
        <div className="todo-list-wrapper">
            {!!todos && todos.map((todo, index) => {
                return (
                    <div className="todo" key={`${todo} ` + `${index}`}>
                        {!todo.isShowInput && <span className="todo-heading">{todo.todoname}</span>}
                        {todo.isShowInput && <input type="text" name="name" id="edit-todo" value={todo.todoname} onChange={(e) => setEditInputVal(e.target.value, index)} />}
                        {!todo.isShowInput && <button onClick={() => setETodo(index)}>Edit</button>}
                        <button onClick={() => setSaveTodo(index)}>Save</button>
                        <button onClick={() => setRemoveTodo(index)}>Delete</button>
                    </div>
                )
            })}
        </div>

    );
}

export default TodoList;