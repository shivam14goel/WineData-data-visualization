import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flavanoids from './Components/Flavanoids';
import Gamma from './Components/Gamma';


function App() {
  // const [action, setAction] = useState('Flavanoid');
  return (
    <BrowserRouter>
    <div className='HomePage'>
      <nav className='Navbar'>
        Wine Data Set
      </nav>

      <Header /> {/* displayComponent={setAction} */}
      <Routes>
        <Route exact path='/Flavanoids' Component={Flavanoids}></Route>
        <Route exact path='/Gamma' Component={Gamma}></Route>
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App;
