import { useQuery } from "@tanstack/react-query";

const useKidsProductsCategory = () => {
    const { data: kidsCategories = [] } = useQuery({
        queryKey: ['kidsCategories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/kidsproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return [kidsCategories];
};

export default useKidsProductsCategory;