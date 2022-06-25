import React from 'react';
import { FcContacts } from 'react-icons/fc'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p>Loading...</p>
    }
    const photo = user.reloadUserInfo.photoUrl
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

            <div className='flex items-center'>
                <p className='font-bold mr-4'>{user.displayName}</p>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar online">
                        <div class="w-10 rounded-full">
                            {photo ? <img className='rounded-full' width={30} src={photo} alt='' /> : <div className='text-sm h-full text-white bg-primary flex justify-center items-center'>{user.displayName.substring(0, 1)}</div>}
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        <li><button className='btn'>Logout</button></li>
                    </ul>
                </div>
            </div>
            {/* <div className='flex'>
                <p className='font-bold mr-4'>{user.displayName}</p>
                {photo ? <img className='rounded-full' width={30} src={photo} alt='' /> : <div className='text-sm h-full text-white bg-primary flex justify-center items-center'>{user.displayName.substring(0, 1)}</div>}
            </div> */}
        </div>
    );
};

export default Header;