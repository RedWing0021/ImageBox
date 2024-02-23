import React, { useState } from 'react';
// import { useHistory} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./Navbar"
import "./LoginPage.css"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful:', userCredential.user.uid);
            setError('');
            // Redirect to the home page
            // useHistory('/');
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
            console.error('Login error:', error.message);
        }
    };


    return (
        <div className="body-1">
        <div className="login-box" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin} className='form'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button className="btn" type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </div>
    );
}

export default LoginPage;
