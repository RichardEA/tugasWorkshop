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
        <div className="kotak">
            <h1>Login Page</h1>
            <h2>Username : </h2>
            <input className='inputteks' ref={userRef} onChange={handleUserChange}id='username' name='username'  placeholder='insert username here'/>
        <div>
                <h2>Password: </h2>
                <input type='password' className='inputteks' ref={passRef} onChange={handlePassChange} id='password' name='password' placeholder='insert password here'/>
            </div>
            <div>
                <br/>
                <button className='tombol' onClick={handleClick}> Login </button>
            </div>
        </div>
    );
}

export default SignIn;