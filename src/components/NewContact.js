import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import './Css/NewContact.css'
const NewContact = () => {
    const [user] = useAuthState(auth);
    const userName = useRef();
    const phoneNumber = useRef();
    const handleAddContact = () => {
        const contactList = {
            name: userName.current.value,
            phone: phoneNumber.current.value,
            email: user.email
        }

        fetch('http://localhost:5000/allContact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactList)
        })
            .then(res => res.json())
            .then(data => {
                toast("Successfully added Contact")
                userName.current.value = ''
                phoneNumber.current.value = ''
            })
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold p-4'>Add Contact</h2>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" autoComplete='off' name="name" id='name' ref={userName} required />
                    <label htmlFor="name" className="form__label" >Name</label>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Number" name="number" id='number' ref={phoneNumber} required />
                    <label htmlFor="number" className="form__label">Number</label>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleAddContact} className='btn'>Add Contact</button>
            </div>
        </div>
    );
};

export default NewContact;