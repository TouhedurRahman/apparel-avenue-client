import mensCollectionImage from '../../../../src/assets/images/Banner/banner-4.jpg';
import useProducts from '../../../Hooks/useProducts';
import SingleCollections from '../SingleCollections/SingleCollections';

const MensCollections = () => {
    const [products, loading] = useProducts();

    const maleCollections = products.filter(product => product.forGender === "male");

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"MENS COLLECTION"}
                products={maleCollections}
                img={mensCollectionImage}
                loading={loading}
            />
        </div>
    );
};

export default MensCollections;