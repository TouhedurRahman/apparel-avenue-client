import useAuth from '../../Hooks/useAuth';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Loading from '../../Components/Loading/Loading';
import { MdContactPhone, MdLockReset } from 'react-icons/md';
import myProfileImage from '../../../src/assets/images/Banner/banner-6.jpg';
import CoverImage from '../Shared/CoverImage/CoverImage';
import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useHosting from '../../Hooks/useHosting';
import useSingleUser from '../../Hooks/useSingleUser';
import Swal from 'sweetalert2';

const MyProfile = () => {
    const { user, resetPassword, loading } = useAuth();
    const [singleUser, refetch, loadingSingleUser] = useSingleUser();
    const img_hosting_url = useHosting();

    const [file, setFile] = useState(null);
    const [enterUserEmail, setEnterUserEmail] = useState(null);

    const mobileNoRef = useRef();
    const userEmailRef = useRef(null);

    const updateInfo = (updatedInfo) => {
        const url = `http://localhost:5000/user/${user.email}`;
        axios.patch(url, updatedInfo)
            .then((response) => {
                if (response.data.acknowledged === true) {
                    refetch();
                    toast.success("Successfully Updated!");
                }
            })
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const updatedProfilePic = {
                    profilePicture: imgURL
                }
                updateInfo(updatedProfilePic);
            })
            .catch(() => {
                toast.error("Opps! File not selected.");
            })
    }

    const handleUpadateMobileNo = () => {
        const mobileNo = mobileNoRef.current.value;
        const upadateMobileNo = { mobile: mobileNo }
        updateInfo(upadateMobileNo);
    }

    const handleEmailOnBlur = (e) => {
        const email = e.target.value;
        if (user.email === email) {
            setEnterUserEmail(email);
        }
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
                    userEmailRef.current.value = '';
                    setEnterUserEmail('');
                })
                .then(() => { })
        }
        else {
            toast.error("Error! Please enter your registered email.");
            userEmailRef.current.value = '';
        }
    }

    return (
        <div className='pt-20'>
            <div>
                <CoverImage
                    title={"MY PRofilE"}
                    img={myProfileImage}
                />
            </div>
            <div className='flex justify-center items-center mx-3 lg:m-5'>
                <div className="w-full lg:w-5/6 bg-white border border-green-400 rounded-lg shadow-lg shadow-orange-100 lg:p-5">
                    <div className='w-full lg:flex justify-center items-center'>
                        <div className='w-full mx-auto flex justify-center items-center'>
                            {
                                loadingSingleUser
                                    ?
                                    <Loading />
                                    :
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='lg:flex justify-center items-center my-5'>
                                            <img
                                                className="h-[280px] w-[280px] mb-3 p-3 border-4 border-green-700 rounded-tr-[50px] rounded-bl-[20px] shadow-lg shadow-orange-200"
                                                src={
                                                    singleUser.profilePicture
                                                        ?
                                                        `${singleUser.profilePicture}`
                                                        :
                                                        "https://i.ibb.co/6r3zmMg/user.jpg"
                                                } alt="Loading..." />
                                        </div>
                                        <p className='text-center text-2xl font-bold italic my-2 text-green-600'>Update Profile Picture</p>
                                        <hr></hr>
                                        <form onSubmit={handleUpload}>
                                            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={handleChange} />
                                            <div className='text-center'>
                                                <button value="submit" className='btn my-5 bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600'>
                                                    Upload <FaCloudUploadAlt className='text-2xl text-green-800' />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                            }
                        </div>
                        <div className='w-full p-3 my-3 lg:m-5'>
                            {
                                loading
                                    ?
                                    <Loading />
                                    :
                                    <>
                                        <p className='text-2xl font-bold italic my-2 text-green-600'>Name</p>
                                        <hr></hr>
                                        <p className="mb-5 text-xl font-bold"> {user?.displayName}</p>
                                        <p className='text-2xl font-bold italic my-2 text-green-600'>Email</p>
                                        <hr></hr>
                                        <p className="mb-5 text-xl font-bold">{user?.email}</p>
                                        <p className='text-2xl font-bold italic my-2 text-green-600'>Role</p>
                                        <hr></hr>
                                        <p className="mb-5 text-xl font-bold">
                                            {
                                                (user?.status) === 'admin' ? "✓ Admin | ✓ User" : "✓ User"
                                            }
                                        </p>
                                        <p className='text-2xl font-bold italic my-2 text-green-600'>Mobile Number</p>
                                        <hr></hr>
                                        <div className='w-full flex justify-between items-center my-3'>
                                            <input
                                                type="text"
                                                defaultValue={singleUser.mobile}
                                                placeholder="Please enter your mobile no."
                                                className="input border-0 border-b-2 border-b-green-600 mr-5 font-bold w-full rounded focus:outline-none"
                                                ref={mobileNoRef}
                                            />
                                            <button
                                                className='w-[120px] btn mx-auto bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex'
                                                onClick={handleUpadateMobileNo}
                                            >
                                                Update <MdContactPhone className="text-2xl text-green-800" />
                                            </button>
                                        </div>
                                        <hr></hr>
                                        <p className='text-2xl font-bold italic my-2 text-green-600'>Change Password</p>
                                        <hr></hr>
                                        <div className='w-full flex justify-between items-center my-3'>
                                            <input
                                                type="email"
                                                placeholder="Please enter your email"
                                                className="input border-0 border-b-2 border-b-green-600 mr-5 font-bold w-full rounded focus:outline-none"
                                                onBlur={handleEmailOnBlur}
                                                ref={userEmailRef}
                                            />
                                            <button
                                                onClick={handleResetPassword}
                                                className='w-[120px] btn mx-auto bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex'
                                            >
                                                Reset <MdLockReset className="text-2xl text-green-800" />
                                            </button>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;