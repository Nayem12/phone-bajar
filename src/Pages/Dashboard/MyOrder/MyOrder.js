import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Spinner from '../../../Spinner/Spinner';

const MyOrder = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user.email)
    const url = `https://assignment-12-server-rosy.vercel.app/bookings?email=${user?.email}`;
    const navigate = useNavigate()
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            // setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            // setLoading(false)
            // if (!data) {
            //     // <Spinner />
            //     refetch()
            // }
            return data;
        }
    })
    if (isLoading) {
        return <Spinner />
    }
    if (!bookings) {
        return <Spinner />
    }
    return (
        <div>
            <h3 className="text-3xl">My order</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!bookings ? <Spinner /> :
                            bookings?.length && bookings?.map((booking, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{booking.productname}</td>
                                    <td>{booking.resaleprice}</td>
                                    <td><button className='btn btn-primary btn-xs'>Pay</button></td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;