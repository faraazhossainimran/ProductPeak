import ProductCard from "../../../../components/Products/ProductCard/ProductCard";
import useTrending from "../../../../hooks/useTrending"


const TrendingProducts = () => {
    const [trendingItems] = useTrending()
    // console.log(trendingItems);
    return (
        <div className="card container mx-auto my-12">
        <h1 className="text-2xl font-semibold my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Trending Products</h1>
      <div className="grid md:m-0 md:grid-cols-2 gap-6">
        {trendingItems?.map(trendingItem => <ProductCard key={trendingItem._id} productCard={trendingItem}></ProductCard>)}
      </div>
    </div>
    )
}

export default TrendingProducts