import logo from './logo.svg';
import './App.css';
import Home, { DataContext2 } from './Home';
import SignIn from './SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './Test';
import Cart from './Cart';
import { createContext, useContext } from 'react';
import { useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

export const DataContext = createContext({});

function App() {

  const [cartItem, setCartItem] = useState([]);
  const [tes] = useState('tes');

  const contextData = {
    cartItem,
    tes,
    setCartItem
  }

  return (
    <DataContext.Provider value={contextData}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<SignIn/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    </DataContext.Provider>
    
  );
}

export default App;
