import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './Test';
import Cart from './Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
