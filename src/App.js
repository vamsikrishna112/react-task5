// import logo from './logo.svg';
import './App.css';
import Home from "./portfolio/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {HashRouter, Routes, Route} from 'react-router-dom';
import About from './portfolio/About';
import Footer from './portfolio/footer';
import Skill from './portfolio/skill';
import Projects from './portfolio/project';

function App() {
  return (
    <div>
      <HashRouter>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skill' element={<Skill/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
