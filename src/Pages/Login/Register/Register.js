import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaUserCircle, FaKey } from "react-icons/fa";
import { RiImageAddFill } from 'react-icons/ri';
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Register.css'
import UseToken from '../../../UseToken/UseToken';

const Register = () => {
    const googleProvider = new GoogleAuthProvider()
    const { createuser, updateUser, loginwithGoogle } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [createdUserEmail, setcreatedUserEmail] = useState('')
    const [signUpError, setSignUPError] = useState('')
    const imgkey = "600fe5c47bc3c6151d2bcd6051b0cd31";
    console.log(imgkey);
    const [token] = UseToken(createdUserEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    const handleLogin = data => {

        console.log('testing', data)
        setSignUPError('');
        createuser(data.email, data.password)
            .then(result => {
                const user = result.user
                // console.log('testing', user)
                toast('User Created Successfully.')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserDB(data.name, data.email, data.specialty)
                    })
                    .catch(e => console.log(e))
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const handleGoogle = () => {
        loginwithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }
    const saveUserDB = (name, email, specialty) => {
        const user = { name, email, specialty };
        fetch('https://assignment-12-server-rosy.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setcreatedUserEmail(email)

            })
    }
    return (
        <div className='h-[500px] flex my-[100px]  justify-center items-center '>
            <div className='w-96 p-7 shadow-lg'>

                <h2 className='text-center px-5'>Sign Up</h2>
                <form className="form" onSubmit={handleSubmit(handleLogin)}>
                    <div className="textbox">
                        <FaUserCircle className='clouds' />
                        <input
                            {...register("name",
                                {
                                    required: "name Address is required",
                                    minLength: 8
                                })}
                            className="input-field input-bordered w-full max-w-xs h-[44px]" type="text" required />
                        <label>Name</label>
                        {
                            errors.name &&
                            <p role="alert">{errors.name?.message}</p>
                        }
                        {
                            errors?.name?.type === "minLength" &&
                            (
                                <p className='text-red-400'>name must be 8 character</p>
                            )
                        }
                    </div>
                    <div className="textbox">
                        <MdEmail className='clouds' />
                        <input
                            {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                            type="email"
                            className="input-field input-bordered w-full max-w-xs h-[44px]" required />
                        <label>Email</label>
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="textbox">
                        <FaKey className='clouds' />
                        <input
                            {...register("password",
                                {
                                    required: "password is require",
                                    minLength: { value: 6, message: 'password must be 6 character' }
                                })}

                            type="password"
                            className="input-field input-bordered w-full max-w-xs h-[44px]" required />

                        <label>Password</label>
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}

                    </div>

                    <select className="select border border-red-500 select-ghost w-full max-w-xs"
                        {...register('specialty')}>
                        <option value="buyer" selected>Buyer</option>
                        <option value="seller">Seller</option>

                    </select>
                    <input className='w-full btn btn-accent mt-6' type="submit" value="SIGNUP" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <h1 className='text-center mt-3'>Already have an account? please <Link to='/login' className='text-primary'><u>Log in</u></Link></h1>
                <div className="divider">OR</div>
                <input onClick={handleGoogle} className='w-full btn btn-outline mt-6 uppercase' type="submit" value="Continue with google" />
            </div>
        </div>
    );
};

export default Register;