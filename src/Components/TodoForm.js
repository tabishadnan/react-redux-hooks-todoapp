import React from 'react';
import { useSelector } from 'react-redux';
import useInputState from '../Hooks/useInputState';
import useAddTodoState from '../Hooks/useAddTodoState';

const TodoForm = () => {

    const data = useSelector(state => state);

    const [value, updateValue] = useInputState(data.name);

    const [todo, setTodo] = useAddTodoState(data.todos);

    return (
        <div className="add-todo-input-wrapper">
            <input type="text" name="name" id="add-todo" value={value} onChange={updateValue} />
            <button className="bg-light-sea-green" onClick={setTodo}>Add</button>
        </div>
    );
}

export default TodoForm;