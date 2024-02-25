import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocial } from 'react-icons/io5';

const ShareSocialMedia = ({ url }) => {

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnInstagram = () => {
        window.open(`https://www.instagram.com/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
    };

    return (
        <div className="flex justify-center items-center my-10 lg:mb-7 relative">
            <div className="flex items-center absolute">
                <IoShareSocial
                    className='transition duration-300 ease-in-out bg-white text-gray-600 hover:text-yellow-900 border-4 border-green-400 rounded-full p-2 border-x-0'
                    size={48}
                />
                <FaFacebook
                    className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-600 hover:text-blue-500 border-4 border-green-400 rounded-full p-2 border-x-0"
                    size={48}
                    onClick={shareOnFacebook}
                />
                <FaInstagram
                    className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-600 hover:text-purple-600 border-4 border-green-400 rounded-full p-2 border-x-0"
                    size={48}
                    onClick={shareOnInstagram}
                />
                <FaXTwitter
                    className="cursor-pointer transition duration-300 ease-in-out bg-white text-gray-600 hover:text-red-900 border-4 border-green-400 rounded-full p-2 border-x-0"
                    size={48}
                    onClick={shareOnTwitter}
                />
            </div>
            <div className='w-full flex justify-center items-center'>
                <hr className="w-[45%] border-green-400 border-2 rounded-full" />
            </div>
            <div className='w-full flex justify-center items-center'>
                <hr className="w-[45%] border-green-400 border-2 rounded-full" />
            </div>
        </div>
    );
};

export default ShareSocialMedia;