import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RoutesList from "./RoutesList";

/** Main App component, renders Nav and RoutesList components */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
