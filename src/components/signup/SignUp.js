import React from 'react';

import FormControl from '../Ui/formcontrol/FormControl';
import useInput from '../../hooks/use-input';


const SignUp = () => {
  const {
    value: enteredName,
    isValid: isValidName,
    hasError: isInvalidName ,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    reset: nameResetHandler ,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: isValidLastName,
    hasError: isInvalidLastName ,
    onChange: lastNameChangeHandler,
    onBlur: lastNameBlurHandler,
    reset: lastNameResetHandler ,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isValidEmail,
    hasError: isInvalidEmail ,
    onChange: emailChangeHandler,
    onBlur: emailBlurHandler,
    reset: emailResetHandler ,
  } = useInput((value) => value.includes('@') );

  const {
    value: enteredUserName,
    isValid: isValidUserName,
    hasError: isInvalidUserName ,
    onChange: userNameChangeHandler,
    onBlur: userNameBlurHandler,
    reset: userNameResetHandler ,
  } = useInput((value) => (value) => value.trim() !== "");

  // Check if all required inputs are valid 
  let isValidForm = false ;
  if (isValidName && isValidLastName && isValidEmail && isValidUserName) {
        isValidForm = true
      }

  const submitHandler = async(e) => {
    e.preventDefault()
    // If isn't valid form return
    if(!isValidForm) {
      window.alert('invalid form')
      return
    }
    

    const paylod = {
      id: Date.now(),
      firts_name: enteredName,
       last_name: enteredName,
       email: enteredEmail,
       username: enteredUserName,
       is_superuser: false,
       is_staff: false,
       is_invited: false,
    }

    try{
       await fetch("http://51.38.36.98:8020/signup/", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paylod) })
    } catch(err) {
      console.log(err);
      window.alert(err.message)
    }

    // If valid form rest input and send a request to server
    nameResetHandler()
    lastNameResetHandler()
    emailResetHandler()
    userNameResetHandler()
  }

  return (  
    <form onSubmit={submitHandler}>
    <h2>SignUp</h2>
    <FormControl >
      <label htmlFor="name">First Name</label>
      <input
        value={enteredName}
        type='text'
        id='name'
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      {isInvalidName && <p className="error-text">Please enter a valid First name.</p>}
    </FormControl>
    <FormControl >
      <label htmlFor="last-name">Last Name</label>
      <input
        value={enteredLastName}
        type='text'
        id='last-name'
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
      />
      {isInvalidLastName && <p className="error-text">Please enter a valid Last name.</p>}
    </FormControl>
    <FormControl >
      <label htmlFor="email">Email</label>
      <input
        value={enteredEmail}
        type='email'
        id='email'
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      {isInvalidEmail && <p className="error-text">Please enter a valid Email.</p>}
    </FormControl>
    <FormControl >
      <label htmlFor="username">Username</label>
      <input
        value={enteredUserName}
        type='text'
        id='username'
        onChange={userNameChangeHandler}
        onBlur={userNameBlurHandler}
      />
      {isInvalidUserName && <p className="error-text">Username is required.</p>}
    </FormControl>
   
    <button> submit</button>
    </form>
  );
};

export default SignUp;
