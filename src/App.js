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
 * - user
 * - token
 *
 * Context:
 * - user
 *
 * App --> { Nav, RoutesList }
*/

function App() {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(localStorage.token);


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


  async function login(credentials) {

    const token = await JoblyApi.loginUser(credentials);
    localStorage.setItem('token', token);

    setToken(token);
  }


  async function register(userInputs) {

    const token = await JoblyApi.registerUser(userInputs);
    localStorage.setItem('token', token);

    setToken(token);

  }

  async function logout() {
    localStorage.clear();
    setToken(null);
    setUser(null);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }}>
          <Nav user={user} />
          <RoutesList loginUser={login} registerUser={register} logout={logout} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
