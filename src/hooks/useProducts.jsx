import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from 'react-query';

const useProducts = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:products } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const response = await axiosPublic.get('/products');
            return response.data;
        }
      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [products, isPending]
}

export default useProducts