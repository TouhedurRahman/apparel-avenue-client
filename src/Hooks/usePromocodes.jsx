import { useQuery } from "@tanstack/react-query";


const usePromocodes = () => {
    const { data: promocodes = [], isLoading: loadingPromocodes, refetch } = useQuery({
        queryKey: ['promocodes'],
        queryFn: async () => {
            const url = 'http://localhost:5000/promocodes';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [promocodes, loadingPromocodes, refetch];
};

export default usePromocodes;