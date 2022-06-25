import React from 'react';

const Contact = ({ contact }) => {
    const { name, phone } = contact;
    return (
        <div className='flex justify-between pl-10 mr-20 gap-44 mt-5'>
            <p className='mb-6'>{name}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Contact;