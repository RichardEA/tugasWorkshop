import './Login.css';

function Login(){
    return (
        <div className="box">
            <h1>Login Page</h1>
            <div>
                <h2>Username : </h2>
                <input className='field' placeholder='insert username here'/>
            </div>
            <div>
                <h2>Password : </h2>
                <input className='field' placeholder='insert password here'/>
            </div>
            <div>
                <br/>
                <button className='button'> Login </button>
            </div>
        </div>
    );
}

export default Login;