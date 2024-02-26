import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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
                // console.log(loggedUser);
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