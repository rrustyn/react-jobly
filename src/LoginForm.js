import { useState } from 'react';
import UserDataForm from './UserDataForm';
import JoblyApi from './api.js';



function LoginForm({ setGlobalUser }) {

  // const [formData, setFormData] = useState({
  //   username: null,
  //   password: null
  // });
  //const loginFields = { username, password };

  async function login(input) {
    const res = await JoblyApi.loginUser(input);
    //setFormData(res);
    setGlobalUser(res);
    // try{
    // }
    // catch{
    //   //error code for bad token/req
    // }
  }



  return (
    <UserDataForm inputs={loginFields} onSubmit={login} />
  );
}

export default LoginForm;
