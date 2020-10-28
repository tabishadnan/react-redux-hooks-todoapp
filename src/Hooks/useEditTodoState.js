import { useDispatch } from 'react-redux';

const useEditTodoState = (val) => {

    const dispatch = useDispatch();

    const handleIsShowInput = (index) => {
        dispatch({type : "ISSHOWINPUT", edittodoindex : index})
    };

    const handleEditInpuVal = (editInputValue, index) => {
        dispatch({ type: 'EDITINPUTTODO', eValue: editInputValue, eIndex: index, })
    };

    const handleSaveTodo = (index) => {
        dispatch({type : "SAVETODO", sIndex : index})
    };

    const handleRemoveTodo = (index) => {
        dispatch({type : "REMOVETODO", removetodoindex : index})
    };

    return [val, handleIsShowInput, handleEditInpuVal, handleSaveTodo, handleRemoveTodo];

}

export default useEditTodoState;