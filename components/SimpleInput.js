import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    nameInputBlurHandler: nameInputBlurHandler
  } = useInput(value => value.trim() !== '')

  
  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    nameInputBlurHandler: emailInputBlurHandler
  } = useInput(value => value.includes('@'))

  let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true
    } 

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(!enteredNameIsValid) return;
    console.log(enteredName);
  };

  const nameInputClasses = nameInputHasError
  ? 'form-control error-text' 
  : 'form-control'

  const emailInputClasses = emailInputHasError
  ? 'form-control error-text' 
  : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          />
        {nameInputHasError && <p>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          />
        {emailInputHasError && <p>Name must not be invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
