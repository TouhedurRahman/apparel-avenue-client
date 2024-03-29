import useKidsProductsCategory from '../../../../Hooks/useKidsProductsCategory';
import useProducts from '../../../../Hooks/useProducts';
import kidsCollectionImage from '../../../../assets/images/Banner/banner-5.jpg';
import SingleCollections from '../../SingleCollections/SingleCollections';

const KidsCollections = () => {
    const [products, loading] = useProducts();
    const [kidsCategories] = useKidsProductsCategory();

    const kidsCollections = products.filter(product => product.forGender === "kids");

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"KIDS COLLECTION"}
                products={kidsCollections}
                img={kidsCollectionImage}
                categories={kidsCategories}
                loading={loading}
            />
        </div>
    );
};

export default KidsCollections;