import { Helmet } from "react-helmet"
import Banner from "../Banner/Banner"


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Product Peak</title>
            </Helmet>
           <Banner></Banner>
        </div>
    )
}

export default Home