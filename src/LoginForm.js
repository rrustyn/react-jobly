import UserDataForm from './UserDataForm';

/**
 * Form for user login
 * 
 * Props:
 * - loginUser: function from App to login user with API passed to UserDataForm
 * 
 *  App --> RoutesList --> LoginForm --> UserDataForm
 */
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
