import { useDispatch } from 'react-redux';

const useAddTodoState = (todo) => {

    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch({type : "ADDTODOS"})
    };

    return [todo, addTodo];

}

export default useAddTodoState;