import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorWithProfile] = useUpdateProfile(auth);
    const addName = useRef();
    const addEmail = useRef();
    const addPassword = useRef();
    const handleSignUp = async () => {
        const name = addName.current.value;
        const email = addEmail.current.value;
        const password = addPassword.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        toast('signup successfully')
    }
    if (user) {
        toast("Create account successfully, Please Login")
        navigate('/login')
    }
    if (loading || updating) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8'>Signup</h2>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="Name" name="name" autoComplete='off' id='name' ref={addName} required />
                    <label htmlFor="name" className="form__label">Name</label>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="email" className="form__field" placeholder="Type Email Address" autoComplete='off' name="Email" id='Email' ref={addEmail} required />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="password" className="form__field" placeholder="Password" name="password" autoComplete='off' id='password' ref={addPassword} required />
                    <label htmlFor="password" className="form__label">Password</label>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleSignUp} className='btn'>SignUp</button>
            </div>
            <div className='flex justify-center mt-5'>
                <p>You already have an account? <Link className='text-blue-700' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default CreateAccount;