import Home from "./pages/Home";
import "./styles/App.css";
// import "./styles/layout.css";
// import "./styles/typography.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
        <Footer />
      </div>
      <div className="main-content">
        <div className="content">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>
      </div>
    </div >
  )
}

export default App;
