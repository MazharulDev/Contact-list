import React from 'react';
import { FcContacts } from 'react-icons/fc'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../shared/Loading';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    const photo = user?.reloadUserInfo.photoUrl
    const logout = () => {
        signOut(auth)
    }
    return (
        <div className='flex items-center justify-between px-1 lg:px-4'>
            <div className='text-2xl p-4 flex items-center gap-2'>
                <label htmlFor="my-drawer-2" className="cursor-pointer drawer-button lg:hidden"><AiOutlineMenuUnfold /></label>
                <FcContacts className='text-4xl' />
                <h2>Contact</h2>
            </div>
            <div>
                <AiOutlineSearch className='absolute mt-4 ml-2 text-xl' />
                <input type="text" placeholder="Search..." className="input w-8 sm:w-[40%] lg:w-[90%] bg-slate-700 focus:outline-0 focus:bg-slate-200 px-8" />
            </div>

            <div className='flex items-center'>
                <p className='font-bold mr-4 hidden lg:block'>{user?.displayName}</p>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar online">
                        <div className="w-10 rounded-full">
                            {photo ? <img className='rounded-full' width={30} src={photo} alt='' /> : <div className='text-2xl h-full text-white bg-primary flex justify-center items-center'>{user?.displayName.substring(0, 1)}</div>}
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        <li><button onClick={logout} className='btn'>Logout</button></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;