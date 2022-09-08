import { useState } from 'react';
import UserDataForm from './UserDataForm';



function LoginForm({ loginUser }) {


  const loginFields = {
    username: "",
    password: ""
  };

  return (
    <UserDataForm inputs={loginFields} onSubmit={loginUser} />
  );
}

export default LoginForm;
