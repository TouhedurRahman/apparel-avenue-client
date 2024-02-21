import CoverImage from '../../Shared/CoverImage/CoverImage';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const GenderCategory = ({ title, products, img, loading, gotoPage }) => {
    return (
        <div>
            {
                title
                &&
                <div className="mb-10">
                    <CoverImage
                        img={img}
                        title={title}
                    />
                </div>
            }
            {
                loading
                    ?
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
                        {
                            products.slice(0, 8).map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
            }
            <div className=" flex justify-between items-center mx-5 mt-3 mb-10">
                <div className='md:w-full'>
                    <hr className="border-black border-b-2 my-4 mx-2" />
                </div>
                <Link
                    to={`/${gotoPage}`}
                    className='w-full flex justify-center items-center'
                >
                    <button className="btn btn-outline px-10 border-0 border-b-4 font-extrabold font-serif border-b-green-500 mt-4 bg-orange-300 text-black">
                        View All
                    </button>
                </Link>
                <div className='md:w-full'>
                    <hr className="border-black border-b-2 my-4 mx-2" />
                </div>
            </div>
        </div>
    );
};

export default GenderCategory;