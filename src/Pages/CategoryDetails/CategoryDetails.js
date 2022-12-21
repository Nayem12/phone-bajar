import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import CardDetails from './CardDetails';

const CategoryDetails = () => {
    const items = useLoaderData()
    const [bookings, setBookings] = useState()
    return (
        <div>
            <div className='w-[90%] m-auto grid grid-cols-3 gap-10'>
                {
                    items.map(item => <CardDetails
                        key={item.category_id}
                        item={item}
                        setBookings={setBookings}
                    ></CardDetails>)
                }


            </div>
            <div>
                {
                    bookings && <ConfirmationModal
                        setBookings={setBookings}
                        bookings={bookings}
                    ></ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default CategoryDetails;