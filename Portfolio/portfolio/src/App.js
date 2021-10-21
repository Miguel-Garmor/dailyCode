
import './App.css';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Story from "./components/Story";
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <div className="App">
       
        <Nav />
        <Route path = "/" exact component = {Home}/>
        <Route path = "/Projects" component = {Projects}/>
        <Route path ="/Story" component = {Story}/>
        <Route path = "/Contact" component = {Contact}/>
      </div>
    </Router>
  );
}

export default App;
