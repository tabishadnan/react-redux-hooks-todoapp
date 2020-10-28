import { useDispatch } from 'react-redux';

const useInputState = (val) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({type : "UPDATEINPUTVAL", event : e})
    };

    return [val, handleChange];

}

export default useInputState;