import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RiContactsLine } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">

                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content ">
                        <li><Link to='new'><AiOutlineUserAdd /> Add Contact</Link></li>
                        <li><Link to='/'><RiContactsLine /> Contacts</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;