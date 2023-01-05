import react from 'react'
import './index.css'
import Home from './routes/home';
import Skills from './routes/skills';
import Projects from './routes/projects'
import Contect from './routes/contect';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/skills' element = {<Skills/>} />
      <Route path='/projects' element = {<Projects/>} />
      <Route path='/contect' element = {<Contect/>} />
    </Routes>
    </>
  );
}

export default App;
