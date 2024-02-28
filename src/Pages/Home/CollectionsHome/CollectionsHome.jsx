import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const CollectionsHome = () => {
    const [products, loading] = useProducts();

    const maleCollections = products.filter(product => product.forGender === "male");
    const femaleCollections = products.filter(product => product.forGender === "female");
    const kidsCollections = products.filter(product => product.forGender === "kids");

    return (
        <div className="mx-3">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full">
                    <img src="src/assets/images/HomeCollections/new-collection-1.jpg" alt="Mens Collection..." />
                </div>
                <div>
                    {
                        loading
                            ?
                            <div className="flex justify-center items-center">
                                <span className="loading loading-dots loading-lg"></span>
                            </div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    maleCollections.slice(0, 4).map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full order-first md:order-last">
                    <img src="src/assets/images/HomeCollections/new-collection-2.jpg" alt="Womens Collection..." />
                </div>
                <div>
                    {
                        loading
                            ?
                            <div className="flex justify-center items-center">
                                <span className="loading loading-dots loading-lg"></span>
                            </div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    kidsCollections.slice(0, 4).map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full">
                    <img src="src/assets/images/HomeCollections/new-collection-3.jpg" alt="Womens Collection..." />
                </div>
                <div>
                    {
                        loading
                            ?
                            <div className="flex justify-center items-center">
                                <span className="loading loading-dots loading-lg"></span>
                            </div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    femaleCollections.slice(0, 4).map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CollectionsHome;