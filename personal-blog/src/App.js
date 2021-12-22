import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/NavBar';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path = '/' element ={<div><Navbar/><Landing/></div>}/> 
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
