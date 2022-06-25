import React, { useEffect, useState } from 'react';

const ContactList = () => {
    const [contacts, setContact] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allContact')
            .then(res => res.json())
            .then(data => setContact(data))
    }, [])
    return (
        <div>
            <div className='flex justify-around p-5 border-b-[1px] border-gray-600'>
                <h3>Name</h3>
                <h3>Phone Number</h3>
            </div>
            <h2>Contacts ({contacts.length})</h2>

        </div>
    );
};

export default ContactList;