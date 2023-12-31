import { useQuery } from "react-query"
import useAxiosPublic from "./useAxiosPublic"


const useFeatured = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:featuredItems } = useQuery({
        queryKey: ['featured'],
        queryFn: async() => {
            const response = await axiosPublic.get('/products/featured');
            return response.data;
        }


      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [featuredItems, isPending]
}

export default useFeatured