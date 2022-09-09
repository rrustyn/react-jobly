import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import jwt_decode from 'jwt-decode';
import userContext from './userContext';

/** Main App component, renders Nav and RoutesList components
 *
 * State:
 * - user: object; user data from API, fetched when token updates
 * - token: string; token from API
 *
 * Context:
 * - user
 *
 * App --> { Nav, RoutesList }
*/

//GLOBAL TOKEN CONSTANT FOR LOCALSTORAGE TOKEN NAME

function App() {

  const [user, setUser] = useState(null);

  //localStorage.getItem(token)
  const [token, setToken] = useState(localStorage.token || null);


  /** Fetch user data from API on mount and token state change */
  useEffect(function setUserState() {

    async function getUserFromAPI() {
      const payload = jwt_decode(token);
      const userRes = await JoblyApi.getUser(payload.username);
      setUser(userRes);
    }

    if (localStorage.token) {
      JoblyApi.token = localStorage.token;
      getUserFromAPI();
    }
  }, [token]);


  /** login a user and sets token recieved in response
   * used in LoginFrom
   */
  async function login(credentials) {

    const token = await JoblyApi.loginUser(credentials);

    localStorage.setItem('token', token);
    setToken(token);
  }

  /** register a new user and sets token recieved in response
   * used in SignUpForm
  */
  async function register(userInputs) {

    const token = await JoblyApi.registerUser(userInputs);

    localStorage.setItem('token', token);
    setToken(token);

  }
  
  async function updateUser(userInputs) {
    const res = await JoblyApi.updateUser(user.username, userInputs);
    setUser(res);
  }

  /** logout a user and resets stored data
   * used in Logout
   */
  async function logout() {
    //.removeItem(key)
    localStorage.clear();
    setToken(null);
    setUser(null);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }}>
          <Nav
            logout={logout} />
          <RoutesList
            loginUser={login}
            registerUser={register}
            updateUser={updateUser}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
