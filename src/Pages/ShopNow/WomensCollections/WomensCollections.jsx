import useProducts from "../../../Hooks/useProducts";
import womensCollectionImage from '../../../../src/assets/images/Banner/banner-1.jpg';
import SingleCollections from "../SingleCollections/SingleCollections";
import useWomensProductsCategory from "../../../Hooks/useWomensProductsCategory";

const WomensCollections = () => {
    const [products, loading] = useProducts();
    const [womensCategories] = useWomensProductsCategory();

    const femaleCollections = products.filter(product => product.forGender === "female");

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"WOMENS COLLECTION"}
                products={femaleCollections}
                img={womensCollectionImage}
                categories={womensCategories}
                loading={loading}
            />
        </div>
    );
};

export default WomensCollections;