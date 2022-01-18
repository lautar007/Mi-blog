import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/NavBar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Countries from './components/Countries/Countries';
import Eventy from './components/Eventy/Eventy';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path = '/' element ={<div><Navbar/><Landing/></div>}/> 
            <Route exact path = '/resume' element = {<div><Navbar/><Resume/></div>}/>
            <Route exact path = '/about' element = {<div><Navbar/><About/></div>}/> 
            <Route exact path = '/countries' element = {<div><Navbar/><Countries/></div>}/>
            <Route exact path = '/eventy' element = {<div><Navbar/><Eventy/></div>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
