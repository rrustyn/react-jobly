import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { useState, useEffect } from 'react';

/** Main App component, renders Nav and RoutesList components
 *
 * State:
 * - user
*/

function App() {

  const [user, setUser] = useState({
    userData: null

  });

  //when mount, check localStorage for token to auth user
  useEffect();

  function setGlobalUser(formData) {
    setUser(formData);
  }
  //need token from server
  //useEffect check token

  //login/register/auth defined here and prop drill down
  //ifelse for error, further study, pass error back to component as prop,
  //  render component with error msg

  //token will have username, make another api call

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList setGlobalUser={setGlobalUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
