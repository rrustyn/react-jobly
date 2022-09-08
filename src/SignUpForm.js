import { useState } from 'react';
import UserDataForm from './UserDataForm';
import JoblyApi from './api';

function SignUpForm({ setGlobalUser }) {

  const [user, setUser] = useState({
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null
  });

  async function handleSave(input) {
    const res = await JoblyApi.registerUser(input);
    //unpack res and grab res.token from API
    //use to set global user
    setGlobalUser(res);
    setUser(res);
  }

  return (
    <UserDataForm inputs={user} save={handleSave} />
  );
}

export default SignUpForm;