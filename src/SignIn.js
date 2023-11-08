import { useRef, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function SignIn(){

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    }

    const userRef = useRef(null);
    const passRef = useRef(null);

    const [username] = useState('username');
    const [password] = useState('password');

    const[userInput, setUserInput] = useState('');
    const[passInput, setPassInput] = useState('');

    const handleUserChange = () => {
        setUserInput(userRef.current.value);
    }

    const handlePassChange = () => {
        setPassInput(passRef.current.value);
    }

    const handleClick = () => {
        if (userInput == username && passInput == password){
            navigateToHome()
        }else if (userInput === "" || passInput === ""){
            alert("Isi field yang kosong !")
        }else if (userInput != username && passInput != password){
            alert("Username dan password anda salah !")
        }else if (userInput != username){
            alert("Username anda salah !")
        }else if (passInput != password){
            alert("Password anda salah !")
        }
    }
    return (
        <div className="box">
            <h1>Login Page</h1>
            <div>
                <h2>Username : </h2>
                <input className='field' ref={userRef} onChange={handleUserChange}id='username' name='username'  placeholder='insert username here'/>
            </div>
            <div>
                <h2>Password: </h2>
                <input type='password' className='field' ref={passRef} onChange={handlePassChange} id='password' name='password' placeholder='insert password here'/>
            </div>
            <div>
                <br/>
                <button className='button' onClick={handleClick}> Login </button>
            </div>
        </div>
    );
}

export default SignIn;