import React from 'react';
import { FcContacts } from 'react-icons/fc'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-4'>
            <div className='text-2xl p-4 flex items-center gap-2'>
                <label htmlFor="my-drawer-2" className="cursor-pointer drawer-button lg:hidden"><AiOutlineMenuUnfold /></label>
                <FcContacts className='text-4xl' />
                <h2>Contact</h2>
            </div>
            <div>
                <AiOutlineSearch className='absolute mt-4 ml-2 text-xl' />
                <input type="text" placeholder="Search..." className="input w-96 bg-slate-700 focus:outline-0 focus:bg-slate-200 px-8" />
            </div>
        </div>
    );
};

export default Header;