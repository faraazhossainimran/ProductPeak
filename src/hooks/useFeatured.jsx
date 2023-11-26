import { useQuery } from "react-query"
import useAxiosPublic from "./useAxiosPublic"
import { useState } from "react"


const useFeatured = () => {
    const [featuredItems, setFeaturedItems] = useState([])
    const axiosPublic = useAxiosPublic()

    const {data: items = []} =  useQuery({
        queryKey: ['items'],
        queryFn: async ()=> {
            const res = await axiosPublic.get(`/products/featured`)
            return res.data;
        }
    })
    return[items]
}
//     useEffect(()=> {
//         axiosPublic.get('/products/featured')
//         .then(res =>{
//             setFeaturedItems(res.data)
//             console.log(res.data);
//         })
//     },[axiosPublic])
//     return [featuredItems]


export default useFeatured