import ProductCard from "../../../../components/Products/ProductCard/ProductCard";
import useTrending from "../../../../hooks/useTrending"


const TrendingProducts = () => {
    const [trendingItems] = useTrending()
    console.log(trendingItems);
    return (
        <div className="cardcontainer mx-auto my-12">
        <h1 className="text-4xl font-semibold md:pb-12 mb-8 m-4 ">Trending Products</h1>
      <div className="grid md:m-0 md:grid-cols-4 gap-6 m-4 ">
        {trendingItems?.map(trendingItem => <ProductCard key={trendingItem._id} productCard={trendingItem}></ProductCard>)}
      </div>
    </div>
    )
}

export default TrendingProducts