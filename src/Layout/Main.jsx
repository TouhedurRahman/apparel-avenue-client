import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;
