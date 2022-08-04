import { useReducer } from 'react';

const initialValue = {
    value: "",
    isTouched: false
}

const inputReducer = (state, action) => {
    if(action.type === 'INPUT'){
       return {value: action.value, isTouched: state.isTouched}
    }
    if(action.type === 'BLUR'){
       return {isTouched: true , value: state.value }
    }
    if(action.type === 'RESET'){
       return {value: '', isTouched: false}
    }
    return inputReducer;
}

const useForm = (valididty) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialValue)
 

  const isValidValue = valididty(inputState.value);
  const hasError = !isValidValue && inputState.isTouched;

  const onChangeHandler = (e) => dispatch({type: "INPUT", value: e.target.value});

  const onBlurHandler = () => dispatch({type: "BLUR" });

  const reset = () => {
     dispatch({type: "RESET"})
  }
 
  return {
    value: inputState.value,
    isValidValue,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset
  }

}