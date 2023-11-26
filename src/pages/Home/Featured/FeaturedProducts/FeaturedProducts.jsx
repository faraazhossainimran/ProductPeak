import { useQuery } from "react-query"
import useAxiosPublic from "../../../../hooks/useAxiosPublic"
import useFeatured from "../../../../hooks/useFeatured"
import axios from "axios"


const FeaturedProducts = () => {
    const [featuredItems] = useFeatured()
    return (
        <div>
           
        </div>
    )
}

export default FeaturedProducts
// fetch('http://localhost:5000/products/featured').then(
//     (res) => res.json(),
//   ),