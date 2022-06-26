import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../shared/Loading';
import Contact from './Contact';

const ContactList = () => {
    const [user, loading] = useAuthState(auth);
    const [contacts, setContact] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allContact?email=${user.email}`)
            .then(res => res.json())
            .then(data => setContact(data))
    }, [user.email])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className='lg:flex justify-between pl-10 pr-20 gap-44 p-5 border-b-[1px] border-gray-600'>
                <h3>Name</h3>
                <h3>Phone Number</h3>
            </div>
            <h2 className='pl-3'>Contacts ({contacts.length})</h2>
            <div>
                <div>
                    {
                        contacts.map(contact => <Contact key={contact._id} contact={contact} />)
                    }
                </div>
            </div>
            {
                contacts.length === 0 && <div className=' mt-5'>
                    <div className='flex justify-center mb-8'>
                        <p>No Contact added</p>
                    </div>
                    <div className='flex justify-center'>
                        <Link className='btn' to='new'>Add Contact</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ContactList;