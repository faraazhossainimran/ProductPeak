import axios from 'axios'
const axiosPublic = axios.create({
    baseUrl: 'featured.json'
})
const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic