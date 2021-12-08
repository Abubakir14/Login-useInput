import { useState } from "react"
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIstouched] = useState(false)

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIstouched(true)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useInput