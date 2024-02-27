import useAuth from '../../Hooks/useAuth';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Loading from '../../Components/Loading/Loading';
import { MdContactPhone, MdLockReset } from 'react-icons/md';
import myProfileImage from '../../../src/assets/images/Banner/banner-6.jpg';
import CoverImage from '../Shared/CoverImage/CoverImage';

const MyProfile = () => {
    const { user, loading } = useAuth();

    const handleUpload = () => {

    }

    const handleChange = () => {

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
                                loading
                                    ?
                                    <Loading />
                                    :
                                    <>
                                        {
                                            user?.photoURL
                                                ?
                                                <div className='flex flex-col justify-center items-center'>
                                                    <div className='lg:flex justify-center items-center my-5'>
                                                        <img
                                                            className="h-[280px] w-[280px] mb-3 p-3 border-4 border-green-700 rounded-tr-[50px] rounded-bl-[20px] shadow-lg shadow-orange-200"
                                                            src={user?.photoURL} alt="Loading..." />
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
                                                :
                                                <div className='flex flex-col justify-center items-center'>
                                                    <div className='lg:flex justify-center items-center my-5'>
                                                        <img
                                                            className="h-[280px] w-[280px] mb-3 p-3 border-4 border-green-700 rounded-tr-[50px] rounded-bl-[20px] shadow-lg shadow-orange-200"
                                                            src='https://i.ibb.co/6r3zmMg/user.jpg' alt="Loading..." />
                                                    </div>
                                                    <p className='text-center text-2xl font-bold italic my-2 text-green-600'>Upload Profile Picture</p>
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
                                    </>

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
                                                defaultValue="01839432144"
                                                placeholder="Please Enter your Email"
                                                className="input border-0 border-b-2 border-b-green-600 mr-5 font-bold w-full rounded focus:outline-none"
                                            />
                                            <button
                                                className='w-[120px] btn mx-auto bg-transparent border-2 border-green-400 text-black font-bold hover:bg-orange-100 hover:border-green-600 flex'
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
                                                placeholder="Please Enter your Email"
                                                className="input border-0 border-b-2 border-b-green-600 mr-5 font-bold w-full rounded focus:outline-none"
                                            />
                                            <button
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