import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import "./App.css";
import "./layout.css";
import "./typography.css"
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Home"

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App;
