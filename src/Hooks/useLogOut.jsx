import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogOut = () => {
    const { logOut } = useAuth();

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                window.location.reload();
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return handleLogOut;
};

export default useLogOut;