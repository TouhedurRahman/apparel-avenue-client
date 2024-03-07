import { useQuery } from '@tanstack/react-query';
import mensCollectionImage from '../../../../src/assets/images/Banner/banner-4.jpg';
import useProducts from '../../../Hooks/useProducts';
import SingleCollections from '../SingleCollections/SingleCollections';

const MensCollections = () => {
    const [products, loading] = useProducts();

    const maleCollections = products.filter(product => product.forGender === "male");

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/mensproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"MENS COLLECTION"}
                products={maleCollections}
                img={mensCollectionImage}
                categories={categories}
                loading={loading}
            />
        </div>
    );
};

export default MensCollections;