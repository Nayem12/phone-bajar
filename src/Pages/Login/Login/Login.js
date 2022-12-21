import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseToken from '../../../UseToken/UseToken';

const Login = () => {
    const googleProvider = new GoogleAuthProvider()
    const { user, sigIn, loginwithGoogle } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [loginError, setloginError] = useState('')


    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [loginUserEmail, setloginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail)
    // useEffect(() => {
    //     const localTOken = localStorage.getItem('setToken')
    //     // console.log(token);
    //     if (localTOken) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])

    if (token) {
        navigate('/');
    }
    const handleLogin = data => {
        console.log(data)
        setloginError('')
        sigIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setloginUserEmail(data.email)
                // navigate('/');
            })
            .catch(e => {
                console.log(e)
                setloginError(e.message)
            })
    }
    const handleGoogle = () => {
        loginwithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(e => console.error(e))
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }
    return (
        <div className='h-[480px] flex  justify-center items-center '>
            <div className='w-96 p-7 shadow-lg'>
                <h1 className='text-center'>Log in</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            type="email"
                            className="input input-bordered w-full max-w-xs h-[44px]" />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password",
                                {
                                    required: "password is require",
                                })}

                            type="password"
                            className="input input-bordered w-full max-w-xs h-[44px]" />

                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='w-full btn btn-accent mt-6' type="submit" value="LOGIN" />
                    <div>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </div>
                </form>
                <h1 className='text-center mt-3'>New to Mobile Dokan? <Link to='/register' className='text-primary'>Create new account</Link></h1>
                <div className="divider">OR</div>
                <input onClick={handleGoogle} className='w-full btn btn-outline mt-6 uppercase' type="submit" value="Continue with google" />
            </div>
        </div>
    );
};

export default Login;