import Home from "./pages/Home";
import "./styles/App.css";
// import "./styles/layout.css";
// import "./styles/typography.css";
import NavBar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import { Switch, Route } from 'react-router-dom'
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
