import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {

    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <div className="todo-wrapper">
                        <h1 className="todos-heading">TODOs</h1>
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;