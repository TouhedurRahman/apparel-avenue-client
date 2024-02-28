import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { GrValidate } from "react-icons/gr";
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const { logIn, resetPassword } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [isOpen, setIsOpen] = useState(false);
    const [loginDisabled, setLoginDisabled] = useState(true);
    const [enterUserEmail, setEnterUserEmail] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const captchaRef = useRef(null);
    const userEmailRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(5);
    }, []);

    const handleValidateCaptcha = () => {
        const captchaValue = captchaRef.current.value;

        if (validateCaptcha(captchaValue)) {
            setLoginDisabled(false);
        } else {
            setLoginDisabled(true);
        }
    }

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;

        logIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                Swal.fire({
                    icon: "success",
                    title: "Login successfull!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    const handleEmailOnBlur = (e) => {
        const email = e.target.value;
        setEnterUserEmail(email);
    }

    const handleResetPassword = () => {
        if (enterUserEmail) {
            resetPassword(enterUserEmail)
                .then(() => {
                    Swal.fire({
                        title: "Email Sent!",
                        text: "Please check your email.",
                        icon: "success"
                    });
                    reset();
                    userEmailRef.current.value = '';
                    setEnterUserEmail('');
                })
                .then(() => { })
        }
        else {
            toast.error("Error! Please Enter your registered email.");
            userEmailRef.current.value = '';
        }
    }

    return (
        <div className='pt-20 justify-center flex items-center'>
            <div className="hero-content mt-10 mx-3 shadow-2xl shadow-orange-100 border-2 border-green-400 rounded-lg flex-col lg:flex-row">
                <div className="flex justify-center items-center">
                    <div className="w-full rounded-xl">
                        <img src="src/assets/images/Login/login-picture.jpg" />
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm p-5">
                    <h2 className='text-2xl flex justify-center items-center font-bold'><FaUserCircle className='mr-2 text-green-600' /> Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Email</span>
                            </label>
                            <input
                                type="email"
                                ref={userEmailRef}
                                {...register("email", { required: "Email Address is required" })}
                                placeholder="user@gmail.com"
                                className="input input-accent w-full max-w-xs  border-2 border-green-400 focus:outline-none"
                                onBlur={handleEmailOnBlur}
                            />
                            {
                                errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                            }
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold italic">Password</span>
                            </label>
                            <div className='relative'>
                                <div className='flex'>
                                    <input
                                        type={(isOpen === false) ? 'password' : 'text'}
                                        {...register("password", {
                                            required: "Password is required",
                                            maxLength: { value: 8, message: "Password must be 6-8 characters" },
                                            minLength: { value: 6, message: "Password must be 6-8 characters" },
                                        })}
                                        placeholder="●●●●●●●●"
                                        className="input input-accent w-full max-w-xs border-2 border-green-400 focus:outline-none"
                                    />
                                    <div className="absolute right-2 flex items-center h-full">
                                        {
                                            (isOpen === false)
                                                ?
                                                <AiFillEyeInvisible
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setIsOpen(!isOpen)}
                                                />
                                                :
                                                <AiFillEye
                                                    style={{ cursor: "pointer" }}
                                                    className='w-full text-xl'
                                                    onClick={() => setIsOpen(!isOpen)}
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                            }

                            <div className="form-control">
                                <div className='w-full max-w-xs flex justify-center items-center'>
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                </div>
                                <div className='form-control w-full max-w-xs flex flex-row justify between items-center'>
                                    <input
                                        type="text"
                                        name="captcha"
                                        ref={captchaRef}
                                        placeholder="Type the captcha"
                                        className="w-[60%] input input-accent text-center input-bordered border-2 border-green-400 focus:outline-none"
                                        required
                                    />
                                    <button
                                        onClick={handleValidateCaptcha}
                                        className='w-[40%] btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'
                                    >Validate <GrValidate size={24} className='text-green-600 font-extrabold' /></button>
                                </div>
                            </div>

                            <label className="label mb-5">
                                <span
                                    className="label-text-alt text-blue-600 font-bold hover:link"
                                    onClick={handleResetPassword}
                                >
                                    Forget password?
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="submit" className='w-full btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600' value='Login' disabled={loginDisabled} />
                        </div>
                    </form>

                    <p className='w-full max-w-xs pt-3 text-center'>
                        <span className='font-bold'>New Here?</span> <Link className='text-blue-600 font-bold hover:link' to='/register'>Create an Account</Link>
                    </p>

                    <div className='w-full max-w-xs'>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;