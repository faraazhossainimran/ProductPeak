import useFeatured from "../../../../hooks/useFeatured";
import ProductCard from "../../../../components/Products/ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [featuredItems, isPending] = useFeatured();
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }
  return (
    <div className="card container mx-auto my-12">
        <h1 className="text-2xl font-semibold md:py-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Featured Products</h1>
      <div className="grid m-4 md:m-0 md:grid-cols-2 gap-6">
        {featuredItems?.map(featuredItem => <ProductCard key={featuredItem._id} productCard={featuredItem}></ProductCard>)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
