import useAxiosPublic from "./useAxiosPublic";


const useProductDetails = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:productDetails } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async() => {
            const response = await axiosPublic.get('/product/:id');
            return response.data;
        }


      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [productDetails, isPending]
}


export default useProductDetails