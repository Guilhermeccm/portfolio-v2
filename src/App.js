import { useState } from 'react';
import './App.css';
import About from './components/aboutme/About';
import Experience from './components/experience/Experience';
import Intro from './components/intro/Intro';
import Nav from './components/nav/Nav';
import Projects from "./components/projects/Projects";


function App() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Nav/>
      <Intro/>
      <About/>
      <Projects/>
      <Experience active={active} setActive={setActive}/>
    </div>
      
  );
}

export default App;
