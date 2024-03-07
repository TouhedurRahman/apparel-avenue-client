import useProducts from "../../../Hooks/useProducts";
import womensCollectionImage from '../../../../src/assets/images/Banner/banner-1.jpg';
import SingleCollections from "../SingleCollections/SingleCollections";
import { useQuery } from "@tanstack/react-query";

const WomensCollections = () => {
    const [products, loading] = useProducts();

    const femaleCollections = products.filter(product => product.forGender === "female");

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/womensproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return (
        <div className='pt-20'>
            <SingleCollections
                title={"WOMENS COLLECTION"}
                products={femaleCollections}
                img={womensCollectionImage}
                categories={categories}
                loading={loading}
            />
        </div>
    );
};

export default WomensCollections;