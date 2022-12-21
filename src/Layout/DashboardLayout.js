import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-64'>
                <Sidebar />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>


        </div>
    );
};

export default DashboardLayout;