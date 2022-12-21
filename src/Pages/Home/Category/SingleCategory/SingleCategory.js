import React from 'react';
import { Link } from 'react-router-dom';
import '../Category.css'


const SingleCategory = ({ categories }) => {
    const { name, img, ct_id } = categories
    return (
        <div>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={img} alt="avatar" />

                <div className="py-5 text-center">
                    <span className="text-sm text-gray-700 dark:text-gray-200">{name}</span>
                    <Link to={`/category/${ct_id}`} className="block text-2xl font-bold border border-l-indigo-700 m-3 mb-0 rounded-md bg-white  text-lime-800 " role="link">Shop Now</Link>
                </div>
            </div>

        </div>
    );
};

export default SingleCategory;