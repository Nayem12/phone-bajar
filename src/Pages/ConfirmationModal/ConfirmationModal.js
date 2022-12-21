import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ConfirmationModal = ({ bookings, setBookings }) => {
    const { user } = useContext(AuthContext)
    const { name, location, picture, resale_price, original_price, years_of_use, condition, description, time } = bookings;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const originalprice = form.originalprice.value;
        const resaleprice = form.resaleprice.value;

        const productbooking = {
            productname: productName,
            user: name,
            email,
            originalprice,
            resaleprice,
            phone,

        };
        fetch('https://assignment-12-server-rosy.vercel.app/productconfirm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productbooking)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                toast.success('Booking successfully')
            })
    }


    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="productName"
                            className="input w-full mt-6 border-2 border-lime-300"
                            type="text"
                            value={name}
                            placeholder="Your Name"
                            disabled
                        />
                        <input
                            name="name"
                            className="input w-full mt-6 border-2 border-gray-300"
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Your Name"
                            disabled
                        />
                        <input
                            name="email"
                            className="input w-full mt-6 border-2 border-gray-300"
                            type="email"
                            value={user?.email}
                            placeholder="Your Email Address"
                            disabled
                        />
                        <div>
                            <input
                                name="phone"
                                type="text"
                                placeholder="Your Phone Number"
                                className="input w-full mt-6 border-2 border-gray-300"
                            />
                            <input
                                name="location"
                                readOnly
                                type="text"
                                value={location}
                                placeholder="Your Phone Number"
                                className="input w-full mt-6 border-2 border-gray-300"
                            />
                        </div>
                        <div>
                            <input
                                name="originalprice"
                                type="text"
                                value={original_price}
                                disabled
                                className="input w-full mt-6 border-2 border-gray-300"
                            />
                            <input
                                name="resaleprice"
                                type="text"
                                value={resale_price}
                                disabled
                                className="input w-full mt-6 border-2 border-gray-300"
                            />
                        </div>
                        <input
                            className="w-full rounded-md btn btn-primary mt-6"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;