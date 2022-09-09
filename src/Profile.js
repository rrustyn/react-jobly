import UserDataForm from "./UserDataForm";
import {useContext} from "react";
import userContext from "./userContext";

/** Profile component, renders UserDataForm to display profile edit page
 *
 * Prop:
 * - user
 *
 * RoutesList --> Profile
 *
*/

function Profile({ updateUser }) {
  
  const { user } = useContext(userContext);

  const inputFields = [
    {type: "text", value: user.username, display: "Username", name: "username", isDisabled: true},
    {type: "text", value: user.firstName, display: "First Name", name: "firstName"},
    {type: "text", value: user.lastName, display: "Last Name", name: "lastName"},
    {type: "email", value: user.email, display: "email", name: "email"}
  ]
  
  return (
    <>
      <UserDataForm inputs={inputFields} onSubmit={updateUser} />
    </>
  );
}

export default Profile;