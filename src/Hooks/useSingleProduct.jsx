import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useSingleProduct = () => {
    const { id } = useParams();

    const { data: product = {}, isLoading: loadingSingleProduct } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const url = `http://localhost:5000/product/${id}`;
            const result = await fetch(url);
            return result.json();
        }
    })

    return [product, loadingSingleProduct]
};

export default useSingleProduct;