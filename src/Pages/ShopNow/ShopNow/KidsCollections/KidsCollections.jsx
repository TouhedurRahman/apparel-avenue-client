import { useQuery } from '@tanstack/react-query';
import useProducts from '../../../../Hooks/useProducts';
import kidsCollectionImage from '../../../../assets/images/Banner/banner-5.jpg';
import SingleCollections from '../../SingleCollections/SingleCollections';

const KidsCollections = () => {
    const [products, loading] = useProducts();

    const kidsCollections = products.filter(product => product.forGender === "kids");

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/kidsproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"KIDS COLLECTION"}
                products={kidsCollections}
                img={kidsCollectionImage}
                categories={categories}
                loading={loading}
            />
        </div>
    );
};

export default KidsCollections;