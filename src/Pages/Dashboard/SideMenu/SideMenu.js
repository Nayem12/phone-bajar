import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SideMenu = ({ currentUser }) => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="flex flex-col border-b pb-3 items-center mt-6 -mx-2">
                <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                />
                <p className='text-xl font-bold'>{currentUser?.specialty}</p>

                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                    {user?.displayName}
                </h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                    {user?.email}
                </p>

            </div>
            <>
                <div className="flex flex-col justify-between flex-1 mt-3">
                    <nav>


                        {
                            currentUser.specialty === 'admin' && <>
                                <NavLink to='dashboard/allbuyers' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>All Buyers</span>
                                </NavLink>

                                <NavLink to='dashboard/allseller' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>All Sellers</span>
                                </NavLink>

                                <NavLink to='dashboard/myorder' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>My Orders</span>
                                </NavLink>

                            </>
                        }

                        {
                            currentUser.specialty === 'seller' && <>


                                <NavLink to='dashboard/addproducts' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>Add Product</span>
                                </NavLink>


                                <NavLink to='dashboard/myproducts' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>My Products</span>
                                </NavLink>

                            </>
                        }


                        {
                            currentUser.specialty === 'buyer' && <>
                                <NavLink to='dashboard/myorder' className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>My Orders</span>
                                </NavLink>
                            </>
                        }
                    </nav>
                </div>

            </>

        </div>
    );
};

export default SideMenu;