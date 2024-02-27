import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";

const SocialLogin = () => {
    const { googleLogIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })

                const user = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    profilePicture: loggedUser.photoURL
                };

                const url = "http://localhost:5000/users";
                axios.post(url, user)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'User Login successfull.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div>
            <div className="divider">OR</div>

            <button
                onClick={handleGoogleLogIn}
                className='w-full btn bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'
            >
                <FcGoogle className="text-2xl" /> <span className="text-green-800">CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;