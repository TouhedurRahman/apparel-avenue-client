import { GiRotaryPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-container font-serif font-bold print:hidden'>
            <div className="footer-details">
                <div>
                    <p className='text-4xl font-bold'>Apparel Avenue</p>
                    <hr></hr>
                    <div className='mt-5 mb-5'>
                        <h5 className='text-2xl font-extrabold'><i>Our Head Office</i></h5>
                        <address>
                            <i>
                                Dattapara, Model Town <br />
                                Ashulia, Savar <br />
                                Dhaka, Bangladesh.
                            </i>
                        </address>
                    </div>
                    <hr></hr>
                    <div className='mt-5 mb-5 flex flex-col items-center '>
                        <div className='flex'>
                            <GiRotaryPhone className='pe-2' style={{ fontSize: "25px" }} /><span className='ml-3' style={{ fontSize: "15px" }}>+880 1839-432144</span>
                        </div>
                        <div className='flex'>
                            <MdEmail className='pe-2' style={{ fontSize: "25px" }} /><span className='ml-3' style={{ fontSize: "15px" }}>apperalavenue@fashionbd.com</span>
                        </div>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <div className='mb-5'>
                        <h6>SERVICES</h6>
                        <hr></hr>
                    </div>
                    <p className='link link-hover'>Shipping</p>
                    <p className='link link-hover'>Online Payment</p>
                    <p className='link link-hover'>Cash on Delivery</p>
                    <p className='link link-hover'>Support 24/7</p>
                </div>
                <div className='lg:block hidden'>
                    <div className='mb-5'>
                        <h6>COMPANY</h6>
                        <hr></hr>
                    </div>
                    <p className='link link-hover'>About Us</p>
                    <p className='link link-hover'>Contacts</p>
                    <p className='link link-hover'>Jobs</p>
                </div>
                <div className='lg:block hidden'>
                    <div className='mb-5'>
                        <h6>LEGAL</h6>
                        <hr></hr>
                    </div>

                    <p className='link link-hover'>Terms of use</p>
                    <p className='link link-hover'>Privacy Policy</p>
                    <p className='link link-hover'>Cookie Policy</p>
                </div>
                <div className='get-touch'>
                    <div className='mb-5'>
                        <h6>FOLLOW US ON</h6>
                        <hr></hr>
                    </div>
                    <div className='get-touch-icons mt-5 mb-5' style={{ fontSize: "30px" }}>
                        <MdEmail style={{ cursor: "pointer" }}></MdEmail>
                        <AiFillYoutube style={{ cursor: "pointer" }}></AiFillYoutube>
                        <AiFillInstagram style={{ cursor: "pointer" }}></AiFillInstagram>
                        <FaFacebookSquare style={{ cursor: "pointer" }}></FaFacebookSquare>
                        <FaTwitterSquare style={{ cursor: "pointer" }}></FaTwitterSquare>
                        <FaWhatsappSquare style={{ cursor: "pointer" }}></FaWhatsappSquare>
                    </div>
                </div>
            </div>
            <hr className='w-1/2 mx-auto' />
            <div className='text-center my-5'>
                <p className='text-xl'><small>Copyright © {year} All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;