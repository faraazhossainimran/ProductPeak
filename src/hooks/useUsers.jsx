import { useQuery } from "react-query"
import useAxiosPublic from "./useAxiosPublic"


const useUsers = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const response = await axiosPublic.get('/dashboard/manageUsers');
            return response.data;
        }


      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [users, isPending, refetch]
}

export default useUsers