import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Spinner from '../../../Spinner/Spinner';

const AddProduct = () => {
    const { user, setLoading, logOut } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const navigate = useNavigate()
    const imgkey = process.env.REACT_APP_imgkey;
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-rosy.vercel.app/categories')
            const data = await res.json();
            return data
        }
    })
    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        picture: imgData.data.url,
                        name: data.productName,
                        location: data.location,
                        resale_price: data.reSalePrice,
                        original_price: data.originalPrice,
                        years_of_use: data.useOf,
                        brandname: data.brand,
                        color: data.productColor,
                        category_id: data.category,

                    }
                    fetch('https://assignment-12-server-rosy.vercel.app/item', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('setToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            toast.success('product added successfully');
                            navigate('/')
                        })
                }
            })

        // setLoading(true)

    }
    const token = localStorage.getItem('setToken')
    console.log(token);
    if (!token) {
        logOut()
            .then(result => {
                navigate('/')
            })
            .catch(e => console.error(e))


    }

    if (isLoading) {
        return <Spinner />
    }
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetch('https://assignment-12-server-rosy.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    return (
        <div>
            <section className="max-w-4xl p-6   rounded-md shadow-md">
                <h1 className="text-xl font-bold  capitalize ">Add Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="" htmlFor="Name">Name</label>
                            <input id="Name" type="text" placeholder='Product Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("productName", { required: "Product Name is required" })} />
                            {errors.productName && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.productName?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="location">Location </label>
                            <input id="location" type="text" placeholder='Your Location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("location", { required: "Location is required" })} />
                            {errors.location && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.location?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="originalPrice">Original Price</label>
                            <input id="originalPrice" placeholder='$Original Price' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("originalPrice", { required: "Original Price is required", })} />
                            {errors.originalPrice && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.originalPrice?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="reSalePrice">ReSale Price</label>
                            <input id="reSalePrice" placeholder='$ReSale Price' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("reSalePrice", { required: "ReSale Price is required" })} />
                            {errors.reSalePrice && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.reSalePrice?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="useOf">Uses Of ?</label>
                            <input id="useOf" type="number" placeholder='How many years uses ?' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"    {...register("useOf", {
                                required: "Uses of is required", maxLength: {
                                    value: 2,
                                },
                            })} />
                            {errors.useOf && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.useOf?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="color">Product Color </label>
                            <input id="color" type="test" placeholder='Product Color' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("productColor", { required: "Product Color is required" })} />
                            {errors.productColor && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.productColor?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="brand">Brand </label>
                            <input id="brand" placeholder='Brand of product' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("brand", { required: "Brand is required" })} />
                            {errors.brand && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.brand?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="passwordConfirmation">Select Category</label>
                            <select  {...register("category", { required: "Category is required" })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                {/* {categories.map(category => <option value='01' key={category._id}>{category.name}</option>)} */}
                                <option value="01">Samsung</option>
                                <option value="02">Sony</option>
                                <option value="03">Google</option>

                            </select>
                            {errors.category && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.category?.message}
                                </p>
                            )}
                        </div>



                        <div>
                            <label className="block text-sm font-medium ">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Photo</span></label>
                                        <input type="file" {...register("image", {
                                            required: "Photo is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5  transition-colors duration-200 transhtmlForm bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;