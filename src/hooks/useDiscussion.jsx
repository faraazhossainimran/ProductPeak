import { useQuery } from 'react-query';
import useAxiosPublic from './useAxiosPublic';

const useDiscussion = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data:discussion } = useQuery({
        queryKey: ['discussion'],
        queryFn: async() => {
            const response = await axiosPublic.get('/discussion');
            return response.data;
        }
      })
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message
    return [discussion, isPending]
}

export default useDiscussion;