import { useQuery } from "@tanstack/react-query";


const useWomensProductsCategory = () => {
    const { data: womensCategories = [] } = useQuery({
        queryKey: ['womensCategories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/womensproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return [womensCategories];
};

export default useWomensProductsCategory;