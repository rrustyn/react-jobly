import UserDataForm from './UserDataForm';

function SignUpForm({ registerUser }) {

  const inputFields = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  return (
    <UserDataForm inputs={inputFields} onSubmit={registerUser} />
  );
}

export default SignUpForm;