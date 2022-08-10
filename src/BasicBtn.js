import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import MuiInput from './components/Ui/formcontrol/MUI-input/MuiInput';

const BasicBtn = () => {
  const [users, setUsers] = useState([]);
  const [fields, setFields] = useState({
    name: '',
    email: '',
  });
  const [hasError, setHasError] = useState({});

  const validate = (person) => {
    const errors = {}
    if(!person.name ) errors.name = 'name required'
    if(!person.email ) errors.email = 'email required'
    if(person.email && !isEmail(person.email)) errors.email = 'invalid email'
    return errors
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const person = fields
    const fieldsErrors = validate(person)
    setHasError(fieldsErrors)

  if(Object.keys(fieldsErrors).length) return

    // Add The new entred name to updated names array
    const updatedUsers = [...users, fields];

    // Updated users
    setUsers(updatedUsers);

    // reset values
    setFields({
      name: '',
      email: '',
    });
    setHasError({
      name: '',
      email: ''
    })
  };

  const onChangeInputHandler = (e) => {
    const fieldsCopy = { ...fields };
    fieldsCopy[e.target.name] = e.target.value;
    setFields(fieldsCopy);
  };

  return (
    <div>
      <h2>Sign Up Sheet</h2>
      <form onSubmit={onSubmitHandler}>
        <MuiInput
          onChange={onChangeInputHandler}
          label={'name'}
          value={fields.name}
          errorText={hasError.name?.length && hasError.name}
          name="name"
        />
        <MuiInput
          onChange={onChangeInputHandler}
          label={'email'}
          value={fields.email}
          errorText={hasError.email?.length && hasError.email}
          type="email"
          name="email"
        />
        <button type="submit">Submit</button>
      </form>
      <h3>People</h3>
      <ul>
        {users &&
          users.length > 0 &&
          users.map((user, i) => (
            <li key={i}>
              {user.name}({user.email})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BasicBtn;
