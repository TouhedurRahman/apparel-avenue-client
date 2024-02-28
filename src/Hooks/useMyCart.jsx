import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyCart = () => {
    const { user } = useAuth();

    const { data: cartProduct = [], isLoading: loadingMyCart, refetch } = useQuery({
        queryKey: ['cartProduct', user?.email],
        queryFn: async () => {
            const url = `http://localhost:5000/cart/${user.email}`;
            const result = await fetch(url);
            return result.json();
        }
    })

    return [cartProduct, loadingMyCart, refetch];
};

export default useMyCart;