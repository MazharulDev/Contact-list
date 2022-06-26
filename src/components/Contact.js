import React from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'

const Contact = ({ contact }) => {
    const { name, phone, userEmail } = contact;
    return (
        <div className='lg:grid grid-cols-3 items-center mt-5 hover:bg-slate-700 p-2'>
            <div className='flex items-center gap-4'>
                <div className="w-10">
                    <div className='text-xl h-[40px] rounded-full text-white bg-primary flex justify-center items-center'>{name?.substring(0, 1)}</div>
                </div>
                <p>{name}</p>
            </div>
            <div>
                <p>{userEmail}</p>
            </div>
            <div className='flex gap-4'>
                <p>{phone}</p>
                <button><AiFillDelete className='text-2xl text-red-400 hover:text-red-700' /></button>
                <button><FaRegEdit className='text-2xl text-green-400 hover:text-green-700' /></button>
            </div>
        </div>
    );
};

export default Contact;