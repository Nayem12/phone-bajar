import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Spinner from '../../../Spinner/Spinner';
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal/DeleteModal';

const AllSeller = () => {

    const { user } = useContext(AuthContext)
    // const [currentUsers, setCurrentUser] = useState([]);
    const [removeUser, setRemoveUser] = useState(null)
    const { data: setCurrentUser, isLoading, refetch } = useQuery({
        queryKey: ['users/sellers'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-rosy.vercel.app/users/sellers`)
            const data = await res.json();
            return data
        }
    })
    const handleRemoveUser = () => {
        fetch(`https://assignment-12-server-rosy.vercel.app/users/${removeUser?._id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(result => {
            if (result.acknowledged) {
                toast.success(`${removeUser?.name} deleted successfully.`)
                refetch()

            }
        })
    }
    const handleMakeAdmin = id => {
        fetch(`https://assignment-12-server-rosy.vercel.app/users/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('setToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('admin to hoisot aibar misty de')
                    refetch()
                }
            })
    }
    const closeModal = () => {
        setRemoveUser(null)
    }
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            {setCurrentUser.length > 0 ? <>   <h1 className='text-3xl pb-5 font-bold'>Manage All Sellers </h1>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller Name</th>
                                <th>Verify</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                setCurrentUser?.length && setCurrentUser.map((person, idx) => <tr key={person._id}>
                                    <th> {idx + 1}</th>
                                    <td >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img title='User image' src={person?.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div title='User Name' className="font-bold">{person?.name}</div>
                                                <div title='User Email' className="text-sm opacity-50">{person?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> <button className='btn btn-primary btn-xs'>Verify</button></td>
                                    <td>{
                                        setCurrentUser?.specialty !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(person._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>
                                    }</td>
                                    <td> <label htmlFor="confirm-modal"><FaTrash title='remove user' onClick={() => setRemoveUser(person)} className='cursor-pointer text-red-500 text-lg' />Delete</label></td>

                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
                {removeUser && <DeleteModal successAction={handleRemoveUser} closeModal={closeModal} title={`Are you sure You want to delete?`} message={`If you want to delete "${removeUser.name}". It can't be recover.`} />}</> : <h1 className='sm:text-4xl text-2xl lg:pt-12 text-center lg:text-left pt-10 lg:pl-8 font-semibold text-red-500'>No Seller Found !</h1>}
        </div>
    );
};

export default AllSeller;