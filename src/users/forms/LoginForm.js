import UserDataForm from '../../common/UserDataForm';
import "./Form.css";

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
    { type: "text", value: "", display: "Username", name: "username" },
    { type: "password", value: "", display: "Password", name: "password" }
  ];

  return (
    <div className="Form">
      <UserDataForm inputs={inputFields} onSubmit={loginUser} />
    </div>
  );
}

export default LoginForm;
