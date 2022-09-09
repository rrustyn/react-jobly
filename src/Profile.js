import UserDataForm from "./UserDataForm";
import { useContext } from "react";
import userContext from "./userContext";

/** Profile component, renders UserDataForm to display profile edit page
 *
 * Prop:
 * - updateUser: callback from App to update user in database
 * 
 * Context:
 * - user: user information used to populate form fields
 *
 * RoutesList --> Profile --> UserDataForm
 *
*/

function Profile({ updateUser }) {

  const { user } = useContext(userContext);

  const inputFields = [
    {
      name: "username",
      type: "text",
      value: user.userData.username,
      display: "Username",
      isDisabled: true
    },
    {
      name: "firstName",
      type: "text",
      value: user.userData.firstName,
      display: "First Name",
    },
    {
      name: "lastName",
      type: "text",
      value: user.userData.lastName,
      display: "Last Name",
    },
    {
      name: "email",
      type: "email",
      value: user.userData.email,
      display: "email",
    }
  ];

  return (
    <>
      <UserDataForm inputs={inputFields} onSubmit={updateUser} />
    </>
  );
}

export default Profile;