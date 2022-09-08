import UserDataForm from "./UserDataForm";

/** Profile component, renders UserDataForm to display profile edit page
 *
 * Prop:
 * - user
 *
 * RoutesList --> Profile
 *
*/

function Profile({ user, save }) {

  return (
    <>
      <h2>Profile</h2>
      <UserDataForm user={user} save={save} />
    </>
  );
}

export default Profile;