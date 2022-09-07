import { useState } from 'react';
import UserDataForm from './UserDataForm';

function LoginForm() {

  const [user, setUser] = useState({
    username: null,
    password: null
  });

  function handleSave(input) {
    setUser(input);
  }

  return (
    <UserDataForm inputs={user} save={handleSave} />
  );
}

export default LoginForm;