import UserDataForm from './UserDataForm';

/**
 * Form for user signup
 * 
 * Props:
 * - registerUser: function from App to signup user with API 
 *                 passed to UserDataForm
 * 
 *  App --> RoutesList --> SignUpForm --> UserDataForm
 */
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