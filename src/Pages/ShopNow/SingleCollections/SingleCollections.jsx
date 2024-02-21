import ProductCard from "../../../Components/ProductCard/ProductCard";
import CoverImage from "../../Shared/CoverImage/CoverImage";

const SingleCollections = ({ title, img, products, loading }) => {
    return (
        <div>
            <div className="mb-10">
                <CoverImage
                    img={img}
                    title={title}
                />
            </div>
            {
                loading
                    ?
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5">
                        {
                            products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default SingleCollections;