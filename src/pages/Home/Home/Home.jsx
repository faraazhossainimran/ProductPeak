import { Helmet } from "react-helmet"
import Banner from "../Banner/Banner"
import FeaturedProducts from "../Featured/FeaturedProducts/FeaturedProducts"
import TrendingProducts from "../Trending/TrendingProducts/TrendingProducts"
import Discussion from "../Discussion/Discussion"


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Product Peak</title>
            </Helmet>
           <Banner></Banner>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
            <Discussion></Discussion>
        </div>
    )
}

export default Home