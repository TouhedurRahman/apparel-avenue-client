import GenderCategory from "../GenderCategory/GenderCategory";
import useProducts from "../../../Hooks/useProducts";
import mensCollectionImage from '../../../../src/assets/images/Banner/banner-4.jpg';
import womensCollectionImage from '../../../../src/assets/images/Banner/banner-1.jpg';
import kidsCollectionImage from '../../../../src/assets/images/Banner/banner-5.jpg';

const ShopNow = () => {
    const [products, loading] = useProducts();

    const maleCollections = products.filter(product => product.forGender === "male");
    const femaleCollections = products.filter(product => product.forGender === "female");
    const kidsCollections = products.filter(product => product.forGender === "kids");

    return (
        <div className="pt-20">
            <GenderCategory
                title={"MENS COLLECTION"}
                products={maleCollections}
                img={mensCollectionImage}
                loading={loading}
            />
            <GenderCategory
                title={"WOMENS COLLECTION"}
                products={femaleCollections}
                img={womensCollectionImage}
                loading={loading}
            />
            <GenderCategory
                title={"KIDS COLLECTION"}
                products={kidsCollections}
                img={kidsCollectionImage}
                loading={loading}
            />
        </div>
    );
};

export default ShopNow;