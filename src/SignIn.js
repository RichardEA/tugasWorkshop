import { useRef, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

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
        if (userInput === username && passInput === password){
            navigateToHome()
        }else if (userInput === "" || passInput === ""){
            alert("Isi field yang kosong !")
        }else if (userInput !== username && passInput !== password){
            alert("Username dan password anda salah !")
        }else if (userInput !== username){
            alert("Username anda salah !")
        }else if (passInput !== password){
            alert("Password anda salah !")
        }
    }
    return (
        <div>
            <div style={{ marginLeft: 'auto', marginRight: 'auto',marginTop: '75px', width: '50em' }}>
                <Card style={{ textAlign: 'center', padding: '20px', backgroundColor:'lavender' }}>
                    WELCOME
                </Card>
                <Card style={{ padding: '20px', marginTop:'20px', backgroundColor:'lavender' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={userRef} onChange={handleUserChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passRef} onChange={handlePassChange} />
                        </Form.Group>
                        <Button style={{ width: '120px', height: '50px' }} onClick={handleClick}>
                            Login
                        </Button>
                    </Form> 
                </Card>
            </div>
        </div>

        
    );

}

export default SignIn;