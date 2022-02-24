import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Containex from './components/Containex';

import PropTypes from 'prop-types'
import Home from './components/Home';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';




function App() {

  const [darkMode,setDarkMode]=useState('dark')
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type) =>{
    setAlert({
      msg :message,
      type :type
    })
  }
  return (
    <div className="App">
      
 

{/* <TextForm email="Enter Email Address" comment="Enter Your comment here"/>  
<Containex/>*/}

<Router>
<Navbar title="TextUtils" about="About Us" mode={darkMode}/>
  <Routes>
        <Route exact path='/' element={<Home/>}>
            
          </Route>
          
          
          <Route exact path='/about' element={<About/>}>
            
          </Route>

          <Route exact path='/comment' element={<TextForm/>}>
            
          </Route>
          
          <Route exact path='/textform' element={<Containex/>}>
            
          </Route>
          

           
          

          
        </Routes>  
        </Router>
    </div>
  );
}

export default App;
