import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./routes-nav/Nav";
import RoutesList from "./routes-nav/RoutesList";
import { useState, useEffect } from 'react';
import JoblyApi from './api/api';
import jwt_decode from 'jwt-decode';
import userContext from './userContext';
import Loader from './common/Loader';

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

const API_TOKEN = "token";

function App() {

  const [user, setUser] = useState({
    userData: null,
    isLoading: true
  });

  //localStorage.getItem(token)
  const [token, setToken] = useState(localStorage.getItem(API_TOKEN) || null);


  /** Fetch user data from API on mount and token state change */
  useEffect(function setUserState() {

    async function getUserFromAPI() {
      const payload = jwt_decode(localStorage.getItem(API_TOKEN));
      const userRes = await JoblyApi.getUser(payload.username);
      setUser({
        userData: userRes,
        isLoading: false
      });
    }

    if (localStorage.token) {
      JoblyApi.token = localStorage.token;
      getUserFromAPI();
    } else {
      setUser(u => ({
        ...u,
        isLoading: false
      }))
    }
  }, [token]);

  /** login a user and sets token recieved in response
   * used in LoginFrom
   */
  async function login(credentials) {

    const token = await JoblyApi.loginUser(credentials);

    localStorage.setItem(API_TOKEN, token);
    setToken(token);
  }

  /** register a new user and sets token recieved in response
   * used in SignUpForm
  */
  async function register(userInputs) {

    const token = await JoblyApi.registerUser(userInputs);

    localStorage.setItem(API_TOKEN, token);
    setToken(token);

  }

  async function updateUser(userInputs) {
    const updateInfo = {
      firstName: userInputs.firstName,
      lastName: userInputs.lastName,
      email: userInputs.email
    };
    const res = await JoblyApi.updateUser(user.userData.username, updateInfo);
    setUser(u => ({
      ...u,
      userData: res
    }));
  }

  /** logout a user and resets stored data
   * used in Logout
   */
  async function logout() {
    //.removeItem(key)
    localStorage.removeItem(API_TOKEN);
    setToken(null);
    setUser(u => ({
      ...u,
      userData: null,
    }));
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }}>
          <Nav
            logout={logout} 
          />
          {user.isLoading
            ?
            <Loader />
            :
            <RoutesList
              loginUser={login}
              registerUser={register}
              updateUser={updateUser}
            />}
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
