import React, { useEffect, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        userWithGoogleSignIn,
        loadingWithGoogleSignIn,
        errorWithGoogleSignIn,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const emailAdd = useRef();
    const passwordAdd = useRef();
    const handleLogin = () => {
        const email = emailAdd.current.value;
        const password = passwordAdd.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user || userWithGoogleSignIn) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from, userWithGoogleSignIn])
    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <h2 className='text-center text-4xl my-4 font-bold p-4'>Login</h2>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="email" className="form__field" placeholder="Type Email Address" name="Email" id='Email' ref={emailAdd} required />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="password" className="form__field" placeholder="Password" name="password" id='password' ref={passwordAdd} required />
                    <label htmlFor="password" className="form__label">Password</label>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleLogin} className='btn'>Login</button>
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleGoogleLogin} className='btn'><FcGoogle className='mr-2 text-xl' /> Sign in with google</button>
            </div>
            <p className='text-center mt-4'>Don't have an account? <Link className='text-blue-700' to='/createAccount'>Create account</Link> </p>
        </div>
    );
};

export default Login;