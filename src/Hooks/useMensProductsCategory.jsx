import { useQuery } from "@tanstack/react-query";

const useMensProductsCategory = () => {
    const { data: mensCategories = [] } = useQuery({
        queryKey: ['mensCategories'],
        queryFn: async () => {
            const url = 'http://localhost:5000/mensproductcategory';
            const result = await fetch(url);
            return result.json();
        }
    });

    return [mensCategories];
};

export default useMensProductsCategory;