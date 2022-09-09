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

  //object with field things
  const inputFields = [
    {type: "text", value: "", display: "Username", name: "username"},
    {type: "password", value: "", display: "Password", name: "password"}
  ]

  return (
    <UserDataForm inputs={inputFields} onSubmit={loginUser} />
  );
}

export default LoginForm;
