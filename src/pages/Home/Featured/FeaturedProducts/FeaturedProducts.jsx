import useFeatured from "../../../../hooks/useFeatured";
import ProductCard from "../../../../components/Products/ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [featuredItems, isPending] = useFeatured();
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }
  return (
    <div className="card container mx-auto my-12">
        <h1 className="text-4xl font-semibold md:pb-12  m-4">Featured Products</h1>
      <div className="grid m-4 md:m-0 md:grid-cols-4 gap-6">
        {featuredItems?.map(featuredItem => <ProductCard key={featuredItem._id} productCard={featuredItem}></ProductCard>)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
