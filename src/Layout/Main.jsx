import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import OurSuppurt from '../Pages/Home/OurSuppurt/OurSuppurt';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
            <OurSuppurt />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Main;
