import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../../../assets/Components/ProductCard/ProductCard";

const CollectionsHome = () => {
    const [products] = useProducts();

    const maleCollections = products.filter(product => product.forGender === "male");
    const femaleCollections = products.filter(product => product.forGender === "female");

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full">
                    <img src="src/assets/images/HomeCollections/new-collection-1.jpg" alt="Mens Collection..." />
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            maleCollections.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full order-first md:order-last">
                    <img src="src/assets/images/HomeCollections/new-collection-2.jpg" alt="Womens Collection..." />
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            femaleCollections.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center m-3 mb-10">
                <div className="w-full">
                    <img src="src/assets/images/HomeCollections/new-collection-3.jpg" alt="Womens Collection..." />
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            femaleCollections.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionsHome;