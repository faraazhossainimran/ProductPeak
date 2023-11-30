import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/Products/ProductCard/ProductCard";



const Products = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="card  container mx-auto my-12">
      <h1 className="text-4xl font-semibold pb-12 m-4 md:m-0">Products</h1>
      <div className="grid m-4 md:m-0 md:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product._id} productCard={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
