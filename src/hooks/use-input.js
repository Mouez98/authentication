import { useState } from "react";


const useInput = (validity) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validity(enteredValue);
    const hasError = !isValid && isTouched;

    const handleValueChange = (e) => {
        setEnteredValue(e.target.value);
      };

    const handleValueBlur = (e) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        onChange: handleValueChange,
        onBlur: handleValueBlur,
        reset : reset
    }
}

export default useInput;