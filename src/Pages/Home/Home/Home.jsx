import Banner from '../Banner/Banner';
import CategorizeProducts from '../CategorizeProducts/CategorizeProducts';
import Category from '../Category/Category';
import CollectionsHome from '../CollectionsHome/CollectionsHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <CategorizeProducts />
            <CollectionsHome />
        </div>
    );
};

export default Home;