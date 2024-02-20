import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import OurSuppurt from '../Pages/Home/OurSuppurt/OurSuppurt';

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
            <OurSuppurt />
            <Footer />
        </div>
    );
};

export default Main;
