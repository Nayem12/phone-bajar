import React from 'react';

const CardDetails = ({ item, setBookings }) => {
    const { name, location, picture, resale_price, original_price, years_of_use, condition, description, time } = item

    console.log(description);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex font-bold'>
                        <p>Original Price: {original_price}</p>
                        <p className='ml-2'>Resale Price: {resale_price} </p>
                    </div>
                    <span>Used: {years_of_use}yr</span>

                    <div className="card-actions">
                        <label onClick={() => setBookings(item)} className="btn btn-primary" htmlFor="my-modal-3">Booking</label>

                        {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;