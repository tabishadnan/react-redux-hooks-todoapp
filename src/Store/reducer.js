const initialState = {
    name: "",
    todos: [],
};

const reducer = (state = initialState, action) => {

    let todoArrCopy = [...state.todos];

    switch (action.type) {
        case "UPDATEINPUTVAL":
            return {
                ...state,
                name: action.event.target.value,
            };
        case "ADDTODOS":
            return {
                ...state,
                todos: state.todos.concat({
                    todoname: state.name,
                    isShowInput: false
                }),
                name: "",
            };
        case "ISSHOWINPUT":
            todoArrCopy[action.edittodoindex].isShowInput = true;
            return {
                ...state,
                todos: todoArrCopy,
            };
        case "EDITINPUTTODO":
            todoArrCopy[action.eIndex].todoname = action.eValue;
            return {
                ...state,
                todos: todoArrCopy,
            };
        case "SAVETODO":
            todoArrCopy[action.sIndex].isShowInput = false;
            return {
                ...state,
                todoArr: todoArrCopy,
                name: "",
            };
        case "REMOVETODO":
            todoArrCopy.splice(action.removetodoindex, 1);
            return {
                ...state,
                todos : todoArrCopy,
            };
        default:
            return state;
    }
};

export default reducer;