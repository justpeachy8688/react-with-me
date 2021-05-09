import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import "./App.css";
import "./layout.css"
import NavBar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content"></div>
    </div>
  )
}

export default App;
