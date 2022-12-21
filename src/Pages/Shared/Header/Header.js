import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/blog' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Blog</NavLink>
        </li>
        {
            user?.email ?
                <>

                    <button className='p-1 mr-3 font-medium' onClick={handleLogOut}>Log Out</button>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Dashboard</NavLink>

                </>
                :
                <ul>
                    <li><NavLink to='/login' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white rounded-md' : 'p-1 mr-3 font-medium'}>Log-In</NavLink></li>

                </ul>
        }
    </>

    return (
        <div>
            <div className="navbar bg-blue-300 p-0">
                <div className="dropdown dropdown-hover lg:mr-[120px] flex-none">
                    <label tabIndex={0} className="btn m-1 lg:hidden"></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-right">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reviews' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>reviews</NavLink>
                        </li>



                    </ul>
                </div>
                <div className="flex-1 website-name">
                    <Link className="btn btn-ghost normal-case lg:text-xl" to='/home'> <img src={"https://i.ibb.co/pXsw4x6/logo.png"} alt="" className='w-[40px] h-[40px] rounded-2xl' /> Modile Dokan</Link>
                </div>

                <div className="flex-none bar-item mr-[380px] largenav">
                    <ul className="menu menu-horizontal p-0 m-2">
                        {menuItems}
                        <p className='text-right'>{user?.photoURL ?
                            <img src={user?.photoURL} alt="" className='w-[45px] h-[45%] rounded-full' title={user?.displayName} />
                            : <h1>ntg</h1>
                        }</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;