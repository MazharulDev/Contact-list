import React, { useEffect, useState } from 'react';
import Contact from './Contact';

const ContactList = () => {
    const [contacts, setContact] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allContact')
            .then(res => res.json())
            .then(data => setContact(data))
    }, [])
    return (
        <div>
            <div className='flex justify-between pl-10 pr-20 gap-44 p-5 border-b-[1px] border-gray-600'>
                <h3>Name</h3>
                <h3>Phone Number</h3>
            </div>
            <h2>Contacts ({contacts.length})</h2>
            <div>
                <div>
                    {
                        contacts.map(contact => <Contact kay={contact._id} contact={contact} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactList;