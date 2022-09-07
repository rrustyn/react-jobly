import { useState } from 'react';
import UserDataForm from './UserDataForm';

function SignUpForm() {
  
  const [user, setUser] = useState({
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email:null
  })
  
  function handleSave(input) {
    setUser(input)
  }
  
  return (
    <UserDataForm inputs={user} save={handleSave} />
  )
}

export default SignUpForm;