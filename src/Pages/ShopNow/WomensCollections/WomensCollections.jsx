import useProducts from "../../../Hooks/useProducts";
import womensCollectionImage from '../../../../src/assets/images/Banner/banner-1.jpg';
import SingleCollections from "../SingleCollections/SingleCollections";

const WomensCollections = () => {
    const [products, loading] = useProducts();

    const femaleCollections = products.filter(product => product.forGender === "female");

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"WOMENS COLLECTION"}
                products={femaleCollections}
                img={womensCollectionImage}
                loading={loading}
            />
        </div>
    );
};

export default WomensCollections;