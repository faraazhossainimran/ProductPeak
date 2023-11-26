import { useQuery } from "react-query"
import useAxiosPublic from "./useAxiosPublic"


const useTrending = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:trendingItems } = useQuery({
        queryKey: ['trending'],
        queryFn: async() => {
            const response = await axiosPublic.get('/products/trending');
            return response.data;
        }
      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [trendingItems, isPending]
}

export default useTrending