import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/NavBar';
import About from './components/About/About';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path = '/' element ={<div><Navbar/><Landing/></div>}/> 
            <Route exact path = '/about' element = {<div><Navbar/><About/></div>}/> 
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
