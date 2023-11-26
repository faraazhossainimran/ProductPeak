import useFeatured from "../../../../hooks/useFeatured";
import ProductCard from "../../../../components/Products/ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [featuredItems, isPending] = useFeatured();
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }
  return (
    <div className="card  container mx-auto my-12">
        <h1 className="text-4xl font-semibold pb-12">Featured Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {featuredItems?.map(featuredItem => <ProductCard key={featuredItem._id} productCard={featuredItem}></ProductCard>)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
