import react, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () =>{
    const [menu, setmenu] = useState('shop');    

    const navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/cart")
    }

    const navigateToShop = () => {
        navigate("/home")
    }
    
    const navigateToLogin = () => {
        navigate("/SignIn")
    }
    return ( 
        <div>
            <div className='navbar'>
                <div lassName='navlogo'>
                <img src={logo} alt=""/>
                    <p>Project E-Commerce</p>
                </div>
                <ul className='navmenu'>
                    <li onClick={navigateToShop}>Shop</li>
                    <li onClick={()=>{setmenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<h/>:<></>}</li> 
                    <li onClick={()=>{setmenu("contact")}}><Link style={{textDecoration: 'none'}} to='/contact'>Contact Us</Link>{menu==="contact"?<h/>:<></>}</li> 
                </ul>
                <div className='navlogincart'>
                    <button onClick={navigateToLogin}>Login</button>
                    <img onClick={navigateToCart} src={cart} alt=""/>
                    <div className='navcartcount'>0</div>
                </div>
            </div>
        </div>
    )
}
export default Navbar