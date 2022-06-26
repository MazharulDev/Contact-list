import React from 'react';

const Contact = ({ contact }) => {
    const { name, phone } = contact;
    return (
        <div className='lg:flex justify-between items-center pl-10 mr-20 gap-44 mt-5 hover:bg-slate-700 p-2'>
            <p>{name}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Contact;