import UserDataForm from '../../common/UserDataForm';
import "./Form.css";

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

  const inputFields = [
    {type: "text", value: "", display: "Username", name: "username"},
    {type: "password", value: "", display: "Password", name: "password"},
    {type: "text", value: "", display: "First Name", name: "firstName"},
    {type: "text", value: "", display: "Last Name", name: "lastName"},
    {type: "email", value: "", display: "email", name: "email"}
  ]

  return (
    <div className="Form">
    <UserDataForm inputs={inputFields} onSubmit={registerUser} />
    </div>
  );
}

export default SignUpForm;
