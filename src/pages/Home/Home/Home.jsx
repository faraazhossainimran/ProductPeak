import { Helmet } from "react-helmet"
import Banner from "../Banner/Banner"
import FeaturedProducts from "../Featured/FeaturedProducts/FeaturedProducts"
import TrendingProducts from "../Trending/TrendingProducts/TrendingProducts"
import Footer from "../../../shared/Footer/Footer"


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Product Peak</title>
            </Helmet>
           <Banner></Banner>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
           <Footer></Footer>
        </div>
    )
}

export default Home