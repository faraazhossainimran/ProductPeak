import ProductCard from "../../../../components/Products/ProductCard/ProductCard";
import useTrending from "../../../../hooks/useTrending"


const TrendingProducts = () => {
    const [trendingItems] = useTrending()
    console.log(trendingItems);
    return (
        <div className="card  container mx-auto my-12">
        <h1 className="text-4xl font-semibold pb-12">Trending Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {trendingItems?.map(trendingItem => <ProductCard key={trendingItem._id} productCard={trendingItem}></ProductCard>)}
      </div>
    </div>
    )
}

export default TrendingProducts