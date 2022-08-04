import FormControl from '../Ui/formcontrol/FormControl';
import useInput from '../../hooks/use-input';

const Login = () => {
  const {
    value: enteredPassword,
    isValid: isValidPassword,
    hasError: isInvalidPassword,
    onChange: passwordChangeHandler,
    onBlur: passwordBlurHandler,
    reset: passwordResetHandler,
  } = useInput((value) => value.trim() !== '' && value.length > 8);

  const {
    value: enteredUserName,
    isValid: isValidUserName,
    hasError: isInvalidUserName,
    onChange: userNameChangeHandler,
    onBlur: userNameBlurHandler,
    reset: userNameResetHandler,
  } = useInput( (value) => value.trim() !== '');

  // Check if all required inputs are valid
  let isValidForm = false;
  if (isValidPassword && isValidUserName) {
    isValidForm = true;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    // If isn't valid form return
    if (!isValidForm) {
      window.alert('invalid form');
      return;
    }

    // If valid form rest input and send a request to server

    const paylod = {
      username: enteredUserName,
      password: enteredPassword,
    };

    try {
      await fetch('http://51.38.36.98:8020/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paylod),
      });
    } catch (err) {
      console.log(err);
      window.alert(err.message);
    }

    userNameResetHandler();
    passwordResetHandler()
  };

  return (
    <form onSubmit={submitHandler}>
    <h2>Login</h2>
      <FormControl>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUserName}
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
        />
        {isInvalidUserName && <p className="error-text">Username is required.</p>}
      </FormControl>
      <FormControl>
        <label htmlFor="password">Password</label>
        <input
          value={enteredPassword}
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {isInvalidPassword && <p className="error-text">Password is required.</p>}
      </FormControl>

      <button> submit</button>
    </form>
  );
};

export default Login;
