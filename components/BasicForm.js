import React from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const validEmailRegex = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const {
    value: enteredFname,
    isValid:enteredFnameIsValid,
    hasError: nameFinputHasError,
    valueChangeHandler: nameFchangeHandler,
    nameInputBlurHandler: nameInputFBlurHandler
  } = useInput(value => value.trim() !== '')
  
  const {
    value: enteredLname,
    isValid:enteredLnameIsValid,
    hasError: nameLinputHasError,
    valueChangeHandler: nameLchangeHandler,
    nameInputBlurHandler: nameLinputBlurHandler
  } = useInput(value => value.trim() !== '')
  
  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    nameInputBlurHandler: emailInputBlurHandler
  } = useInput(value => value.includes('@'))


  let formIsValid = false;
    if(enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
      formIsValid = true
    } 

    const formSubmitHandler = (event) => {
      event.preventDefault();
  
      if(!enteredFnameIsValid) return;
      console.log(enteredFname, enteredLname, enteredEmail);
    };

    const nameInputClasses = nameFinputHasError
    ? 'form-control error-text' 
    : 'form-control'
  
    const nameLInputClasses = nameLinputHasError
    ? 'form-control error-text' 
    : 'form-control'

    const emailInputClasses = emailInputHasError
    ? 'form-control error-text' 
    : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name'
          onChange={nameFchangeHandler}
          onBlur={nameInputFBlurHandler}
          value={enteredFname}
          />
          {nameFinputHasError && <p>Please fill first-name input</p>}
        </div>
        <div className={nameLInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={nameLchangeHandler}
          onBlur={nameLinputBlurHandler}
          value={enteredLname}/>
          {nameLinputHasError && <p>Please fill last-name input</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        onChange={emailChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}/>
          {emailInputHasError && <p>Please fill e-mail input</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
