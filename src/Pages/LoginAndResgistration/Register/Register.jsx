import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaUsersCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [openPassword, setOpenPassword] = useState(false);
    const [openConfirmPassword, setOpenConfirmPassword] = useState(false);

    const handleRegister = async (data) => {
        const userName = data.name;
        const userEmail = data.email;
        const userPass = data.password;
        const userConPass = data.confirmPassword;

        try {
            if (userPass === userConPass) {
                const userCredential = await createUser(userEmail, userPass);
                const registeredUser = userCredential.user;

                console.log(registeredUser);

                const userInfo = {
                    displayName: userName
                };

                await updateUserProfile(userInfo);
            } else {
                console.log("Password & confirm password must be the same.");
            }
        } catch (error) {
            console.error("Error during registration: ", error);
        }
    }

    return (
        <div className='pt-20  justify-center flex items-center'>
            <div className="hero-content mt-10 mx-3 shadow-2xl shadow-orange-100 border-2 border-green-400 rounded-lg flex-col lg:flex-row-reverse">
                <div className="flex justify-center items-center">
                    <div className="w-full rounded-xl">
                        <img src="src/assets/images/Registration/registration-picture.jpg" />
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm p-5">
                    <h2 className='text-2xl flex justify-center items-center font-bold'><FaUsersCog className='mr-2 text-green-600' /> Register</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="form-control flex w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Full Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="User Name"
                                className="input input-accent w-full max-w-xs   border-2 border-green-400 focus:outline-none"
                            />
                            {
                                errors.name && <p className='text-red-600'>{errors.name?.message}</p>
                            }
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Email Address is required" })}
                                placeholder="user@gmail.com"
                                className="input input-accent w-full max-w-xs   border-2 border-green-400 focus:outline-none"
                            />
                            {
                                errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                            }
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Password</span>
                            </label>
                            <div className="relative">
                                <div className="flex">
                                    <input
                                        type={(openPassword === false) ? 'password' : 'text'}
                                        {...register("password", {
                                            required: "Password is required",
                                            maxLength: { value: 8, message: "Password must be 6-8 characters" },
                                            minLength: { value: 6, message: "Password must be 6-8 characters" },
                                        })}
                                        placeholder="●●●●●●●●"
                                        className="input input-accent w-full max-w-xs   border-2 border-green-400 focus:outline-none"
                                    />
                                    <div className="absolute right-2 flex items-center h-full">
                                        {
                                            (openPassword === false)
                                                ? <AiFillEyeInvisible
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setOpenPassword(!openPassword)}
                                                />
                                                : <AiFillEye
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setOpenPassword(!openPassword)}
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                            }
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Confirm Password</span>
                            </label>
                            <div className="relative">
                                <div className="flex">
                                    <input
                                        type={(openConfirmPassword === false) ? 'password' : 'text'}
                                        {...register("confirmPassword", {
                                            required: "Password is required",
                                            maxLength: { value: 8, message: "Password must be 6-8 character" },
                                            minLength: { value: 6, message: "Password must be 6-8 character" },
                                            /* pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/,
                                                message: "Password must be Strong"
                                            } */
                                        })}
                                        placeholder="●●●●●●●●"
                                        className="input input-accent w-full max-w-xs   border-2 border-green-400 focus:outline-none"
                                    />
                                    <div className="absolute right-2 flex items-center h-full">
                                        {
                                            (openConfirmPassword === false)
                                                ?
                                                <AiFillEyeInvisible
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
                                                />
                                                :
                                                <AiFillEye
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                            }
                            <label className="label">
                                <span className="label-text-alt"></span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="submit" className='w-full btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 mr-10' value='Register' />
                        </div>
                    </form>

                    <p className='w-full max-w-xs pt-3 text-center'>
                        <span className='font-bold'>Already have an account?</span> <Link className='text-blue-600 font-bold hover:link' to='/login'>Please Login</Link>
                    </p>

                    <div className='w-full max-w-xs'>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;